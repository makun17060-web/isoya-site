export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">

      {/* ヘッダー */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <div>
            <div className="text-sm text-gray-500">ISOYA COMMERCE</div>
            <div className="text-xl font-bold">磯屋コマース</div>
          </div>
        </div>
      </header>

      {/* メイン */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            えびせんべいを、<br />
            もっと届けやすく。
          </h1>

          <p className="mt-6 text-gray-600">
            磯屋コマースは、手づくりえびせんべい「磯屋」の販売・案内・受注を行うオンライン窓口です。
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              LINEで注文
            </button>
            <button className="border px-6 py-3 rounded-lg">
              お問い合わせ
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">事業内容</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>通販（LINEミニアプリ）</li>
            <li>オリジナルセット販売</li>
            <li>法人・卸対応</li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">磯屋コマースについて</h2>
          <p className="mt-6 text-gray-600 leading-8">
            磯屋コマースは、商品販売だけでなく、LINEを活用した注文導線や
            発送案内まで一体で運営しています。
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t bg-white py-6 text-center text-gray-500">
        © Isoya Commerce
      </footer>

    </div>
  );
}