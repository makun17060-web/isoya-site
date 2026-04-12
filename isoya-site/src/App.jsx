export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>
      
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <h1>磯屋コマース</h1>
        <p>ISOYA COMMERCE</p>
      </header>

      <section style={{ padding: "40px" }}>
        <h2>えびせんべいを、もっと届けやすく。</h2>
        <p>
          磯屋コマースは、手づくりえびせんべい「磯屋」の
          販売・案内・受注を行うオンライン窓口です。
        </p>

        <div style={{ marginTop: "20px" }}>
          <button style={{ padding: "10px 20px", marginRight: "10px" }}>
            LINEで注文
          </button>
          <button style={{ padding: "10px 20px" }}>
            お問い合わせ
          </button>
        </div>
      </section>

      <section style={{ padding: "40px", background: "#f5f5f5" }}>
        <h2>事業内容</h2>
        <ul>
          <li>通販（LINEミニアプリ）</li>
          <li>オリジナルセット販売</li>
          <li>法人・卸対応</li>
        </ul>
      </section>

      <section style={{ padding: "40px" }}>
        <h2>お問い合わせ</h2>
        <p>LINEまたはメールでご連絡ください。</p>
        <p>メール：info@isoya.co.jp</p>
      </section>

      <footer style={{ padding: "20px", borderTop: "1px solid #ddd" }}>
        <p>© Isoya Commerce</p>
      </footer>

    </div>
  );
}