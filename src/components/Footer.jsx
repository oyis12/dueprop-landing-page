const  Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Dueprop</h3>
            <p className="mt-3 text-sm text-slate-400">
             Dueprop.com is an investigative and property verification system that performs property search services providing exclusive property information to ensure it is safe, encumbrance free and investment ready to prospects. Our report is not a buy approval but a guide to helping you make the right investment decision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {/* <li>
                <a href="#verify" className="hover:text-white">Start Verification</a>
              </li> */}
              <li>
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Connect
            </h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21C0 23.3.7 24 1.5 24h11.3V14.7h-3v-3.6h3V8.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.6h-2.9V24h5.7c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 0 0 2.163-2.723c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.737 0-4.952 2.215-4.952 4.952 0 .39.045.765.127 1.125C7.728 8.94 4.1 6.886 1.671 3.897a4.93 4.93 0 0 0-.666 2.489c0 1.722.876 3.243 2.21 4.132a4.903 4.903 0 0 1-2.24-.616v.061c0 2.404 1.712 4.405 3.977 4.857a4.935 4.935 0 0 1-2.232.085c.63 1.964 2.445 3.395 4.6 3.435A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.002-7.513 14.002-14.035 0-.214-.005-.428-.014-.64a9.935 9.935 0 0 0 2.418-2.508z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.26.82-.577 0-.285-.012-1.24-.017-2.246-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.086 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.527.118-3.183 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 0 1 6.003 0c2.292-1.552 3.298-1.23 3.298-1.23.656 1.656.244 2.88.12 3.183.77.838 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.014 2.9-.014 3.293 0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Dueprop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;