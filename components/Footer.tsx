import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-2xl font-black text-white mb-2">$UNT</p>
            <p className="text-sm text-gray-400">The global icon. The community. The movement.</p>
          </div>

          {/* Links */}
          <div>
            <p className="font-black text-white mb-4">NAVIGATION</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#story" className="hover:text-pink-400 transition">
                  Story
                </Link>
              </li>
              <li>
                <Link href="#chart" className="hover:text-pink-400 transition">
                  Chart
                </Link>
              </li>
              <li>
                <Link href="#memes" className="hover:text-pink-400 transition">
                  Memes
                </Link>
              </li>
              <li>
                <Link href="#create" className="hover:text-pink-400 transition">
                  Create
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-black text-white mb-4">COMMUNITY</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://x.com/UNTuniverse" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://t.me/untcult" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2026 $UNT. All rights reserved.</p>
          <p>
            Built by{' '}
            <a href="https://x.com/para1laxx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition font-bold">
              @para1laxx
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
