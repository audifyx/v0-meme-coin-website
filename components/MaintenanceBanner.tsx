'use client'

import { useEffect, useRef, useState } from 'react'

export default function MaintenanceBanner() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const di = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 500)
    return () => clearInterval(di)
  }, [])

  useEffect(() => {
    if (!mountRef.current) return

    let THREE: any
    let renderer: any, scene: any, camera: any, animId: any

    const init = async () => {
      THREE = await import('three')
      const mount = mountRef.current!

      // Scene setup
      scene = new THREE.Scene()
      scene.background = new THREE.Color(0x87CEEB)
      scene.fog = new THREE.Fog(0x87CEEB, 30, 80)

      camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 200)
      camera.position.set(20, 18, 20)
      camera.lookAt(8, 0, 8)

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      mount.appendChild(renderer.domElement)

      // Lighting
      const ambient = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambient)
      const sun = new THREE.DirectionalLight(0xfff5cc, 1.2)
      sun.position.set(20, 40, 20)
      sun.castShadow = true
      sun.shadow.mapSize.width = 2048
      sun.shadow.mapSize.height = 2048
      sun.shadow.camera.near = 0.5
      sun.shadow.camera.far = 200
      sun.shadow.camera.left = -50
      sun.shadow.camera.right = 50
      sun.shadow.camera.top = 50
      sun.shadow.camera.bottom = -50
      scene.add(sun)

      // Block materials
      const makeMat = (color: number, rough = 0.9) => new THREE.MeshLambertMaterial({ color })
      const mats: Record<string, any> = {
        grass: makeMat(0x5D8A3C),
        grassTop: makeMat(0x3A7D1E),
        dirt: makeMat(0x8B5E3C),
        stone: makeMat(0x888888),
        wood: makeMat(0x8B6914),
        leaves: makeMat(0x2D6E1F),
        glass: new THREE.MeshLambertMaterial({ color: 0x88CCFF, transparent: true, opacity: 0.5 }),
        gold: makeMat(0xD4AF37),
        sign: makeMat(0xC8A96E),
        sand: makeMat(0xD4B483),
        water: new THREE.MeshLambertMaterial({ color: 0x1E64C8, transparent: true, opacity: 0.7 }),
      }

      const blockGeo = new THREE.BoxGeometry(1, 1, 1)

      const addBlock = (x: number, y: number, z: number, mat: any) => {
        const mesh = new THREE.Mesh(blockGeo, mat)
        mesh.position.set(x + 0.5, y + 0.5, z + 0.5)
        mesh.castShadow = true
        mesh.receiveShadow = true
        scene.add(mesh)
        return mesh
      }

      // Ground layer
      for (let x = 0; x < 20; x++) {
        for (let z = 0; z < 20; z++) {
          // Road
          if (x === 9 || x === 10 || z === 9 || z === 10) {
            addBlock(x, 0, z, mats.stone)
          } else {
            addBlock(x, 0, z, mats.dirt)
            addBlock(x, 1, z, mats.grass)
          }
        }
      }

      // Water feature
      for (let x = 14; x < 18; x++) {
        for (let z = 14; z < 18; z++) {
          addBlock(x, 0, z, mats.sand)
          addBlock(x, 1, z, mats.water)
        }
      }

      // Buildings to build over time
      const buildQueue: { x: number, y: number, z: number, mat: any }[] = []

      const queueBuilding = (bx: number, bz: number, w: number, d: number, h: number, style: string) => {
        for (let y = 2; y < 2 + h; y++) {
          for (let x = bx; x < bx + w; x++) {
            for (let z = bz; z < bz + d; z++) {
              const isEdge = x === bx || x === bx + w - 1 || z === bz || z === bz + d - 1
              const isTop = y === 2 + h - 1
              let mat = mats.stone
              if (style === 'tower') {
                mat = isTop ? mats.gold : isEdge ? mats.stone : mats.glass
              } else if (style === 'house') {
                mat = isTop ? mats.wood : isEdge ? mats.stone : mats.glass
              } else {
                mat = isTop ? mats.gold : isEdge ? mats.stone : mats.glass
              }
              buildQueue.push({ x, y, z, mat })
            }
          }
        }
      }

      const queueTree = (tx: number, tz: number) => {
        for (let y = 2; y < 6; y++) buildQueue.push({ x: tx, y, z: tz, mat: mats.wood })
        for (let dx = -2; dx <= 2; dx++) {
          for (let dz = -2; dz <= 2; dz++) {
            if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue
            buildQueue.push({ x: tx + dx, y: 6, z: tz + dz, mat: mats.leaves })
            buildQueue.push({ x: tx + dx, y: 7, z: tz + dz, mat: mats.leaves })
          }
        }
        for (let dx = -1; dx <= 1; dx++) {
          for (let dz = -1; dz <= 1; dz++) {
            buildQueue.push({ x: tx + dx, y: 8, z: tz + dz, mat: mats.leaves })
          }
        }
      }

      // Queue up city
      queueBuilding(1, 1, 4, 4, 8, 'tower')
      queueBuilding(13, 1, 5, 4, 10, 'tower')
      queueBuilding(1, 13, 4, 5, 7, 'house')
      queueBuilding(13, 13, 5, 5, 9, 'tower')
      queueBuilding(1, 6, 3, 3, 6, 'house')
      queueBuilding(14, 6, 3, 3, 8, 'tower')

      queueTree(6, 6)
      queueTree(12, 6)
      queueTree(6, 12)
      queueTree(12, 12)

      // Sign letters "WEBSITE COMING SOON" - built block by block at the end
      const signLetters: { x: number, y: number, z: number }[] = [
        // Sign posts at x=7-11, z=5
        { x: 7, y: 2, z: 5 }, { x: 7, y: 3, z: 5 }, { x: 7, y: 4, z: 5 },
        { x: 11, y: 2, z: 5 }, { x: 11, y: 3, z: 5 }, { x: 11, y: 4, z: 5 },
        // Sign board row
        { x: 7, y: 5, z: 5 }, { x: 8, y: 5, z: 5 }, { x: 9, y: 5, z: 5 },
        { x: 10, y: 5, z: 5 }, { x: 11, y: 5, z: 5 },
        { x: 7, y: 6, z: 5 }, { x: 8, y: 6, z: 5 }, { x: 9, y: 6, z: 5 },
        { x: 10, y: 6, z: 5 }, { x: 11, y: 6, z: 5 },
        { x: 7, y: 7, z: 5 }, { x: 8, y: 7, z: 5 }, { x: 9, y: 7, z: 5 },
        { x: 10, y: 7, z: 5 }, { x: 11, y: 7, z: 5 },
      ]
      signLetters.forEach(s => buildQueue.push({ x: s.x, y: s.y, z: s.z, mat: mats.sign }))

      // Gold border around sign
      for (let x = 6; x <= 12; x++) {
        buildQueue.push({ x, y: 8, z: 5, mat: mats.gold })
        buildQueue.push({ x, y: 4, z: 5, mat: mats.gold })
      }
      for (let y = 4; y <= 8; y++) {
        buildQueue.push({ x: 6, y, z: 5, mat: mats.gold })
        buildQueue.push({ x: 12, y, z: 5, mat: mats.gold })
      }

      // Agent (Steve) - simple box character
      const agentBody = new THREE.Group()
      const bodyMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.4), makeMat(0x3D85C8))
      const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), makeMat(0xFDBC94))
      headMesh.position.y = 0.75
      const armL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.7, 0.3), makeMat(0x3D85C8))
      armL.position.set(-0.45, 0, 0)
      const armR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.7, 0.3), makeMat(0x3D85C8))
      armR.position.set(0.45, 0, 0)
      const legL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 0.28), makeMat(0x1A3A6B))
      legL.position.set(-0.18, -0.75, 0)
      const legR = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 0.28), makeMat(0x1A3A6B))
      legR.position.set(0.18, -0.75, 0)
      agentBody.add(bodyMesh, headMesh, armL, armR, legL, legR)
      agentBody.position.set(2.5, 2.9, 2.5)
      scene.add(agentBody)

      // Pickaxe
      const pickaxe = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.8, 0.08), makeMat(0xD4AF37))
      pickaxe.position.set(0.7, 0.2, 0)
      agentBody.add(pickaxe)

      // Particle system for building effects
      const particles: { mesh: any, life: number, vx: number, vy: number, vz: number }[] = []

      // Sky — day/night cycle
      let timeOfDay = 0.3

      let buildIdx = 0
      let buildTimer = 0
      let agentTargetX = 2, agentTargetZ = 2
      let agentT = 0
      let walkCycle = 0
      let camAngle = 0
      let signTextAdded = false

      // 3D text sprite for sign
      const makeTextSprite = (text: string, y: number) => {
        const canvas2 = document.createElement('canvas')
        canvas2.width = 512
        canvas2.height = 128
        const c = canvas2.getContext('2d')!
        c.fillStyle = '#C8A96E'
        c.fillRect(0, 0, 512, 128)
        c.fillStyle = '#000'
        c.font = 'bold 40px monospace'
        c.textAlign = 'center'
        c.fillText(text, 256, 75)
        const tex = new THREE.CanvasTexture(canvas2)
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }))
        sprite.position.set(9, y, 5)
        sprite.scale.set(4, 1, 1)
        return sprite
      }

      const animate = () => {
        animId = requestAnimationFrame(animate)
        agentT++
        timeOfDay += 0.0003
        camAngle += 0.003

        // Slow camera orbit
        camera.position.x = Math.cos(camAngle) * 28 + 10
        camera.position.z = Math.sin(camAngle) * 28 + 10
        camera.position.y = 18 + Math.sin(camAngle * 0.5) * 4
        camera.lookAt(10, 4, 10)

        // Sky color day/night
        const skyCol = new THREE.Color()
        skyCol.setHSL(0.6, 0.7, 0.3 + Math.sin(timeOfDay * Math.PI * 2) * 0.3)
        scene.background = skyCol
        scene.fog = new THREE.Fog(skyCol, 30, 80)
        sun.intensity = 0.6 + Math.sin(timeOfDay * Math.PI * 2) * 0.6

        // Build blocks
        buildTimer++
        if (buildTimer % 4 === 0 && buildIdx < buildQueue.length) {
          const b = buildQueue[buildIdx]
          addBlock(b.x, b.y, b.z, b.mat)
          agentTargetX = b.x
          agentTargetZ = b.z
          agentBody.position.y = b.y + 1

          // Particles
          for (let i = 0; i < 3; i++) {
            const pGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15)
            const pMesh = new THREE.Mesh(pGeo, b.mat.clone())
            pMesh.position.set(b.x + 0.5, b.y + 1.5, b.z + 0.5)
            scene.add(pMesh)
            particles.push({ mesh: pMesh, life: 20, vx: (Math.random() - 0.5) * 0.2, vy: Math.random() * 0.2, vz: (Math.random() - 0.5) * 0.2 })
          }

          buildIdx++

          // Add sign text when sign is done
          if (buildIdx >= buildQueue.length - 5 && !signTextAdded) {
            signTextAdded = true
            scene.add(makeTextSprite('WEBSITE', 7.2))
            scene.add(makeTextSprite('COMING SOON', 6.1))
          }
        }

        // Move agent toward target
        const dx = agentTargetX + 0.5 - agentBody.position.x
        const dz = agentTargetZ + 0.5 - agentBody.position.z
        const dist = Math.sqrt(dx * dx + dz * dz)
        if (dist > 0.2) {
          agentBody.position.x += (dx / dist) * 0.1
          agentBody.position.z += (dz / dist) * 0.1
          agentBody.rotation.y = Math.atan2(dx, dz)
          walkCycle += 0.15
        }

        // Walk animation
        legL.rotation.x = Math.sin(walkCycle) * 0.5
        legR.rotation.x = -Math.sin(walkCycle) * 0.5
        armL.rotation.x = -Math.sin(walkCycle) * 0.5
        armR.rotation.x = Math.sin(walkCycle) * 0.5
        pickaxe.rotation.x = Math.sin(agentT * 0.2) * 0.8 - 0.5

        // Bob
        agentBody.position.y += Math.sin(agentT * 0.15) * 0.02

        // Update particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i]
          p.mesh.position.x += p.vx
          p.mesh.position.y += p.vy
          p.mesh.position.z += p.vz
          p.vy -= 0.01
          p.life--
          p.mesh.material.opacity = p.life / 20
          p.mesh.material.transparent = true
          if (p.life <= 0) {
            scene.remove(p.mesh)
            particles.splice(i, 1)
          }
        }

        renderer.render(scene, camera)
      }

      animate()

      // Resize handler
      const onResize = () => {
        if (!mount) return
        camera.aspect = mount.clientWidth / mount.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(mount.clientWidth, mount.clientHeight)
      }
      window.addEventListener('resize', onResize)
    }

    init()

    return () => {
      cancelAnimationFrame(animId)
      if (renderer) renderer.dispose()
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Three.js canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)' }} />

      {/* UI */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 flex flex-col items-center text-center pointer-events-none px-4">
        <p className="text-xs font-black tracking-[0.4em] mb-3" style={{ color: '#D4AF37', fontFamily: 'monospace' }}>
          ✦ $UNT UNIVERSE ✦
        </p>
        <h1 className="font-black text-white leading-none mb-3" style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          letterSpacing: '-0.03em',
          textShadow: '0 0 40px rgba(212,175,55,0.6)',
          fontFamily: 'monospace'
        }}>
          COMING SOON
        </h1>
        <p className="text-xs tracking-widest mb-8" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
          BUILDING THE UNIVERSE{dots}
        </p>
        <div className="flex items-center justify-center gap-4 pointer-events-auto">
          <a href="https://x.com/UNTuniverse" target="_blank"
            className="text-xs font-black tracking-widest hover:opacity-80 transition"
            style={{ border: '1px solid rgba(212,175,55,0.5)', color: 'rgba(255,255,255,0.8)', padding: '10px 20px', fontFamily: 'monospace' }}>
            TWITTER
          </a>
          <a href="https://x.com/i/communities/2037521607527391725" target="_blank"
            className="text-xs font-black tracking-widest hover:opacity-80 transition"
            style={{ background: '#D4AF37', color: '#000', padding: '10px 20px', fontFamily: 'monospace' }}>
            COMMUNITY
          </a>
        </div>
      </div>
    </div>
  )
}
