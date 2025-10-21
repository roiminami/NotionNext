/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: 'みなみの風物詩へ、クリックで入場', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: '一人会社を目指す、みなみの風物詩', // 英雄区文字
  PROXIO_HERO_TITLE_2: '夢への挑戦を記録し、学びを共有する私の冒険', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github-mark.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 作者についての区块
  PROXIO_ABOUT_ENABLE: true, // 作者区块を表示するか
  PROXIO_ABOUT_TITLE: 'ブログ主について',
  PROXIO_ABOUT_TEXT_1: 'クラウドネイティブ環境やAWS・IBMを中心に業務を行う技術者です',
  PROXIO_ABOUT_TEXT_2:
    'IT会社で技術担当として勤務する傍ら、完全独学で32資格を取得し、ブログ執筆や学習支援にも取り組んでいます。独学で合格できる勉強法や試験対策、実務経験を活かしたIT知識を発信しています。',
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',

  // 数字で見るプロフィール（順番：社会人経験 → 実務プロジェクト数 → 取得資格数 → 累計学習時間）
  PROXIO_ABOUT_KEY_1: '社会人経験',
  PROXIO_ABOUT_VAL_1: '2年目+',
  PROXIO_ABOUT_KEY_2: '実務プロジェクト数',
  PROXIO_ABOUT_VAL_2: '10件+',
  PROXIO_ABOUT_KEY_3: '取得資格数',
  PROXIO_ABOUT_VAL_3: '35+',
  PROXIO_ABOUT_KEY_4: '資格の累計学習時間',
  PROXIO_ABOUT_VAL_4: '3,500h+',
  
  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: 'もっと詳しく',
  
  // 横向滚动文字（スキル・業務内容）
  PROXIO_BRANDS_ENABLE: true,
  PROXIO_BRANDS: [
    'クラウドネイティブ',
    'AWS/IBMクラウド',
    'Kubernetes',
    'OpenShift',
    'インフラ設計',
    '運用自動化',
    'セキュリティ',
    'システム移行',
    'アップデート',
    'バージョンアップ'
  ],
  
  // フッター文
  PROXIO_FOOTER_SLOGAN: '独学と実務を通して、IT知識と学びを発信しています。',


  
  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '作品',
  PROXIO_BLOG_COUNT: 2, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '最新の投稿',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: false, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选我',
  PROXIO_FEATURE_TEXT_1: '我能让您的项目焕发光彩',
  PROXIO_FEATURE_TEXT_2: '丰富的案例经验，专业的技术服务，优质的沟通效率',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
  PROXIO_FEATURE_1_TEXT_1:
    '精简的设计流程确保快速交付，在紧迫的工期下仍能保证品质与细节不打折扣。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '协作式流程',
  PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '细节把控',
  PROXIO_FEATURE_3_TEXT_1:
    '精益求精雕琢每个元素，确保成品精致统一，令人过目难忘',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: 'キャリア',
  PROXIO_CAREER_TEXT: '学歴・職歴',
  
  // 生涯内容卡牌
  PROXIO_CAREERS: [
    {
      title: '日本某文系公立大学',
      bio: '2019-2023',
      text: '学士課程で文系の専門知識と基礎力を身につけました。学業と並行してプログラミングやIT技術を独学し、PHPやITパスポートなど資格取得にも挑戦しました。'
    },
    {
      title: '大手企業による合弁会社勤務',
      bio: '2023-現在',
      text: 'IT企業で技術担当として勤務し、クラウドネイティブ環境やAWS・IBMクラウドを中心に、インフラ設計・運用・自動化・セキュリティ業務に従事しています。'
    },
    {
      title: 'MARCH系大学院',
      bio: '2024-現在',
      text: '社会人として働きながら大学院でビジネスを学び、柔軟な発想力と広い視野を培っています。'
    }
  ],

  // 用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, 
  PROXIO_TESTIMONIALS_TITLE: 'パートナーの声',
  PROXIO_TESTIMONIALS_TEXT_1: '皆さんのフィードバック',
  PROXIO_TESTIMONIALS_TEXT_2:
    '同期・先輩・後輩・他部門・SNSの方々からいただいた応援や感謝の声です。',
  
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: 'もっと見る',
  
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: 'ネットワーク研修では、私の質問に丁寧に答えてくださりありがとうございました！ おかげで、わからなかったところを克服できました。これからもよろしくお願いします！！',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '同期A',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2023-04-28',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: 'お疲れ様です！ グループでは積極的に発言してくれて、話しやすい空気を作ったくれて助かっています。いつもありがとうございます。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '同期B',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2023-05-12',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '今月のメンターメンティー面談も積極的に話してくれてうれしかったです、ありがとうございました！',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '先輩A',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2023-12-12',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: 'SAP試験のアドバイスありがとうございます。勉強頑張ります。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '後輩A',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2025-03-28',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '先ほどはお会いした際に快く対応してくださりありがとうございました！また先日チャットでのご質問対応もとっても嬉しかったです♪今後ともよろしくお願いします。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '後輩B',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2024-06-11',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: 'お礼が遅くなってしまいました。XX案件にていろんな場面でご協力いただきありがとうございました。XX検証のときも大変助かりました。またご一緒お仕事できる日を楽しみにしています。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '他部門A',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2025-03-21',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '刷到您的基本情报笔记分享实在写的太有用了！我是24卒就职文转码的 这对我来说真的很有帮助，谢谢您的分享！',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '小红书 A momo',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2023-09-25',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '自学几个月还是啥也看不懂，我就是需要这样的傻瓜教学啊。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '小红书 B momo',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2024-03-15',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '说得好直白…讲人话、适合我这种完全小白…',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '小红书 C momo',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '2024-09-19',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    }
  ],


  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: false, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: 'NotionNext有帮助文档吗？',
      a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署'
    },
    {
      q: '部署后要如何编写文章？',
      a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>'
    },
    {
      q: '站点部署失败，更新失败？',
      a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助'
    },
    {
      q: '文章没有实时同步？',
      a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决'
    }
  ],



  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '友人帳',
      menus: [
        {
          title: 'ハクのクラウド学習',
          href: 'https://notion-bapey.vercel.app'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: 'お探しのページが見つかりませんでした。',
  PROXIO_404_TEXT: '申し訳ありません。ページが存在しないか、移動または削除された可能性があります。',
  PROXIO_404_BACK: 'ホームに戻る',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '学びを共有し、つながる場所へ',
  PROXIO_CTA_TITLE_2: '日々の気づきや挑戦をSNSでも発信しています',
  PROXIO_CTA_DESCRIPTION:
    '資格学習や一人会社の準備、独学の記録を通して、自分らしい生き方を探しています。共感してくださった方は、ぜひSNSでもつながりましょう。',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/sns',
  PROXIO_CTA_BUTTON_TEXT: 'SNSでつながる',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://www.minami.ac.cn', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
