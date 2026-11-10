import '../reset.css';
import './home.css';
import { metadata as siteMetadata } from '../metadata';

export const metadata = siteMetadata;

// The original first screen (a9d56a8): its own base styles and Typekit kit.
const typekit = `(function (d) {
  var config = { kitId: 'ynj2qfl', scriptTimeout: 3000, async: true },
    h = d.documentElement,
    t = setTimeout(function () { h.className = h.className.replace(/\\bwf-loading\\b/g, "") + " wf-inactive"; }, config.scriptTimeout),
    tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);
    try { Typekit.load(config) } catch (e) { }
  };
  s.parentNode.insertBefore(tk, s)
})(document);`;

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    // Typekit adds wf-* classes to <html> before hydration.
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: typekit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
