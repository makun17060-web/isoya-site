export function SpecifiedCommercialTransaction() {
  const rows = [
    { label: "販売事業者", value: "磯屋コマース合同会社" },
    { label: "運営責任者", value: "木村 太郎" },
    { label: "所在地", value: "〒000-0000 愛知県知多郡武豊町〇〇" },
    { label: "電話番号", value: "090-xxxx-xxxx" },
    { label: "メールアドレス", value: "info@isoya.co.jp" },
    { label: "販売URL", value: "https://isoya.co.jp/" },
    { label: "販売価格", value: "各商品ページに税込価格を表示しています。" },
    {
      label: "商品代金以外の必要料金",
      value:
        "送料、決済手数料等が発生する場合は、各注文画面または案内画面に表示します。",
    },
    {
      label: "お支払い方法",
      value: "クレジットカード決済、その他当社が定める方法",
    },
    { label: "お支払い時期", value: "ご注文時または当社が別途定める時期" },
    {
      label: "商品の引渡時期",
      value:
        "ご注文確認後、準備が整い次第発送します。詳細は注文確認時または発送案内時にお知らせします。",
    },
    {
      label: "申込の有効期限",
      value:
        "注文内容や在庫状況により、当社が定める期間内に限り有効とします。",
    },
    {
      label: "返品・交換・キャンセル",
      value:
        "食品のため、お客様都合による返品・交換は原則としてお受けしておりません。商品に欠陥や配送上の問題があった場合は、商品到着後速やかにご連絡ください。",
    },
    {
      label: "返品送料",
      value:
        "当社原因による不良品・誤配送の場合は当社負担とします。お客様都合の場合はお客様負担となります。",
    },
    {
      label: "不良品の取扱い",
      value:
        "商品不良・誤配送が確認できた場合、状況に応じて交換または返金にて対応します。",
    },
    {
      label: "販売数量",
      value:
        "商品ごとに販売数量が異なる場合があります。詳細は各商品ページまたは注文案内をご確認ください。",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="block">
            <div className="text-sm tracking-[0.25em] text-neutral-500">
              ISOYA COMMERCE
            </div>
            <div className="text-xl font-bold">磯屋コマース</div>
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="/" className="hover:text-neutral-600">
              トップへ戻る
            </a>
            <a href="/privacy" className="hover:text-neutral-600">
              プライバシーポリシー
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="mb-10">
          <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
            LEGAL
          </div>
          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
            磯屋コマースにおける通信販売に関する表示事項です。
            ご注文前にご確認ください。
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-sm">
          {rows.map((row, index) => (
            <div
              key={row.label}
              className={`grid gap-3 px-6 py-5 md:grid-cols-[220px_1fr] md:gap-6 md:px-8 ${
                index !== rows.length - 1 ? "border-b border-neutral-200" : ""
              }`}
            >
              <div className="text-sm font-bold text-neutral-800 md:text-base">
                {row.label}
              </div>
              <div className="text-sm leading-7 text-neutral-700 md:text-base">
                {row.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-neutral-900 px-6 py-8 text-white md:px-8">
          <h2 className="text-2xl font-bold">お問い合わせ</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/80">
            商品、配送、返品、法人注文、卸相談などに関するご連絡は、
            下記メールアドレスまたは公式案内ページよりお願いいたします。
          </p>
          <div className="mt-5 text-sm leading-7 text-white/90">
            メール：info@isoya.co.jp
            <br />
            所在地：〒000-0000 愛知県知多郡武豊町〇〇
            <br />
            電話番号：090-xxxx-xxxx
          </div>
        </div>
      </main>
    </div>
  );
}

export function PrivacyPolicy() {
  const sections = [
    {
      title: "1. 個人情報の取得",
      body: [
        "当社は、お問い合わせ、ご注文、各種ご相談等の際に、氏名、住所、電話番号、メールアドレスその他必要な情報を取得することがあります。",
        "取得する情報は、サービス提供および運営上必要な範囲に限ります。",
      ],
    },
    {
      title: "2. 個人情報の利用目的",
      body: [
        "取得した個人情報は、以下の目的で利用します。",
        "・ご注文内容の確認、受注対応、発送対応のため",
        "・お問い合わせへの回答、ご連絡のため",
        "・商品、サービス、営業案内、重要なお知らせ等のご連絡のため",
        "・法人取引、卸相談、継続取引に関する対応のため",
        "・サービス改善、運営管理、トラブル防止のため",
      ],
    },
    {
      title: "3. 個人情報の第三者提供",
      body: [
        "当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。",
        "ただし、配送業務、決済業務その他業務遂行に必要な範囲で、委託先へ情報を提供する場合があります。",
      ],
    },
    {
      title: "4. 個人情報の管理",
      body: [
        "当社は、個人情報への不正アクセス、漏えい、滅失または毀損を防止するため、必要かつ適切な安全管理措置を講じます。",
        "個人情報を取り扱う必要のある場合に限り、適切な管理のもとで利用します。",
      ],
    },
    {
      title: "5. 外部サービスの利用",
      body: [
        "当社は、受注、連絡、分析、サイト運営等のために外部サービスを利用する場合があります。",
        "これに伴い、各サービス提供事業者の定めるプライバシーポリシー等が適用されることがあります。",
      ],
    },
    {
      title: "6. Cookie等の利用",
      body: [
        "当サイトでは、利便性向上、利用状況の把握、表示改善等のためにCookie等の技術を利用する場合があります。",
        "ブラウザ設定によりCookieの受け取りを拒否することも可能ですが、その場合一部機能が利用できないことがあります。",
      ],
    },
    {
      title: "7. 開示・訂正・削除等",
      body: [
        "本人から自己の個人情報について、開示、訂正、追加、削除、利用停止等の請求があった場合、法令に従い適切に対応します。",
        "ご希望の際は、下記お問い合わせ窓口までご連絡ください。",
      ],
    },
    {
      title: "8. プライバシーポリシーの改定",
      body: [
        "本ポリシーは、法令改正や運営上の必要に応じて改定することがあります。",
        "改定後の内容は、本サイト上に掲載した時点から効力を生じます。",
      ],
    },
    {
      title: "9. お問い合わせ窓口",
      body: [
        "個人情報の取扱いに関するお問い合わせは、下記窓口までお願いいたします。",
        "合同会社　磯屋コマース",
        "メール：info@isoya.co.jp",
        "所在地：〒470-3412 愛知県知多郡南知多町豊浜字清水谷25-5
        "電話番号：0569-65-0955",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="block">
            <div className="text-sm tracking-[0.25em] text-neutral-500">
              ISOYA COMMERCE
            </div>
            <div className="text-xl font-bold">磯屋コマース</div>
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="/" className="hover:text-neutral-600">
              トップへ戻る
            </a>
            <a href="/legal" className="hover:text-neutral-600">
              特定商取引法に基づく表記
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="mb-10">
          <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
            PRIVACY POLICY
          </div>
          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            プライバシーポリシー
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
            合同会社磯屋コマースは、お客様の個人情報の重要性を認識し、
            適切に取り扱い、保護することに努めます。
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="text-xl font-bold md:text-2xl">{section.title}</h2>

              <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-700 md:text-base">
                {section.body.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-neutral-900 px-6 py-8 text-white md:px-8">
          <h2 className="text-2xl font-bold">運営者情報</h2>
          <div className="mt-4 text-sm leading-7 text-white/90 md:text-base">
            会社名：合同会社　磯屋コマース
            <br />
            メール：info@isoya.co.jp
            <br />
            所在地：〒470-3412 愛知県知多郡南知多町豊浜字清水谷25-5
            <br />
            電話番号：0569-65-0955
          </div>
        </div>
      </main>
    </div>
  );
}