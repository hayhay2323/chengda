// EN/ZH toggle. Tag elements with data-i18n="key". innerHTML supported (use HTML in dict).
(function(){
  const D = {
    // Nav
    nav_home: { en: 'Home', zh: '首頁' },
    nav_about: { en: 'About us', zh: '關於我們' },
    nav_product: { en: 'Product', zh: '產品' },
    nav_news: { en: 'News', zh: '最新消息' },
    nav_contact: { en: 'Contact us', zh: '聯絡我們' },
    nav_quote: { en: 'Get a Quote →', zh: '索取報價 →' },

    // Footer
    foot_product: { en: 'Product', zh: '產品' },
    foot_company: { en: 'Company', zh: '公司' },
    foot_resources: { en: 'Resources', zh: '資源' },
    foot_about: { en: 'About us', zh: '關於我們' },
    foot_oem: { en: 'OEM / ODM', zh: 'OEM / ODM' },
    foot_news: { en: 'News', zh: '最新消息' },
    foot_contact: { en: 'Contact us', zh: '聯絡我們' },
    foot_catalog: { en: 'Catalog 2026', zh: '2026 產品目錄' },
    foot_certs: { en: 'Certifications', zh: '證書' },
    foot_press: { en: 'Press', zh: '媒體' },
    foot_washbasin: { en: 'Washbasin', zh: '洗手盆' },
    foot_pedestal: { en: 'Pedestal Sink', zh: '柱盆' },
    foot_standard: { en: 'Standard Toilet', zh: '普通馬桶' },
    foot_smart: { en: 'Smart Toilet', zh: '智能馬桶' },
    foot_tag: { en: 'Engineering precision for every space. Premium ceramic platforms since 1999.', zh: '為每一個空間打造精密工藝。自 1999 年起的高端陶瓷平台。' },
    foot_tag_short: { en: 'Engineering precision for every space.', zh: '為每一個空間打造精密工藝。' },
    foot_copy: { en: '© 2026 Guangdong Chengda Intelligent Technology Co., Ltd.', zh: '© 2026 廣東程達智能科技有限公司' },

    // Home
    home_eyebrow: { en: 'CERAMIC TECHNOLOGY · SINCE 1999', zh: '陶瓷工藝 · 始於 1999' },
    home_h1: { en: 'Engineering<br/>precision for<br/><em>every space.</em>', zh: '為每一個空間<br/><em>精密打造。</em>' },
    home_lede: { en: "Chengda manufactures world-class ceramic platforms — washbasins, pedestal sinks, standard &amp; smart toilets — deployed across 50+ countries with CUPC and ISO 9001 certification.", zh: '程達生產世界級陶瓷衛浴平台——洗手盆、柱盆、普通馬桶與智能馬桶——並通過 CUPC 與 ISO 9001 認證，行銷 50 多個國家。' },
    home_explore: { en: 'Explore Products', zh: '瀏覽產品' },
    home_dl: { en: 'Download Catalog', zh: '下載目錄' },
    stat_years: { en: 'Years of Craft', zh: '年工藝累積' },
    stat_models: { en: 'Models', zh: '產品型號' },
    stat_countries: { en: 'Export Countries', zh: '出口國家' },
    stat_cert: { en: 'ISO 9001 Certified', zh: 'ISO 9001 認證' },

    // Section heads
    sect_products_h: { en: '<em>Four</em> product platforms.<br/>One precision standard.', zh: '<em>四大</em>產品平台。<br/>同一精密標準。' },
    sect_products_p: { en: 'From washbasins to smart toilets — every category is engineered in Chaozhou and exported worldwide. Slide through the lineup, or browse the full catalog.', zh: '從洗手盆到智能馬桶——每一類產品皆於潮州製造，並行銷全球。滑動瀏覽，或查看完整目錄。' },
    sect_about_eyebrow: { en: 'ABOUT US', zh: '關於我們' },
    sect_about_h: { en: 'Twenty-five years of <em>ceramic mastery</em>, made in Chaozhou.', zh: '二十五年<em>陶瓷工藝</em>，潮州製造。' },
    sect_about_p1: { en: 'Founded in 1999, Guangdong Chengda Intelligent Technology Co., Ltd. is a vertically-integrated ceramic sanitaryware manufacturer. Our Chaozhou facility specialises in vitreous china — from raw clay processing to high-temperature firing, glazing, and rigorous QC.', zh: '廣東程達智能科技有限公司成立於 1999 年，是垂直整合的陶瓷衛浴製造商。潮州工廠專精玻化瓷——從原料處理、高溫燒製、釉料到嚴格品控，皆自主完成。' },
    sect_about_p2: { en: 'We partner with importers, designers and brands across 50+ countries, offering full OEM and ODM capabilities — custom shapes, dimensions, colors, glazing and packaging.', zh: '我們與 50 多個國家的進口商、設計師與品牌合作，提供完整 OEM/ODM 服務——客製外型、尺寸、顏色、釉料與包裝。' },
    sect_news_h: { en: 'Latest <em>news</em> &amp; events.', zh: '最新<em>消息</em>與活動。' },
    sect_news_p: { en: 'Catalog releases, fair appearances, and new product launches.', zh: '目錄發布、展會出席與新品上市。' },
    sect_contact_h: { en: 'Ready to get <em>started?</em>', zh: '準備好<em>開始</em>了嗎？' },
    sect_contact_p: { en: 'Send us an inquiry. Our team responds within 24 hours.', zh: '請來信詢問，我們將於 24 小時內回覆。' },

    // Carousel
    car_eyebrow: { en: 'PRODUCT PLATFORMS', zh: '產品平台' },
    cat_washbasin: { en: 'Washbasin', zh: '洗手盆' },
    cat_pedestal: { en: 'Pedestal Sink', zh: '柱盆' },
    cat_standard: { en: 'Standard Toilet', zh: '普通馬桶' },
    cat_smart: { en: 'Smart Toilet', zh: '智能馬桶' },
    sub_above: { en: 'Above-counter 台上盆', zh: '台上盆' },
    sub_semi: { en: 'Semi-recessed 台中盆', zh: '台中盆' },
    sub_under: { en: 'Undercounter 台下盆', zh: '台下盆' },
    sub_floor_p: { en: 'Floor-Standing 立式柱盆', zh: '立式柱盆' },
    sub_wall_p: { en: 'Wall-Hung 掛式柱盆', zh: '掛式柱盆' },
    sub_floor_t: { en: 'Floor-Mounted 立式馬桶', zh: '立式馬桶' },
    sub_wall_t: { en: 'Wall-Hung 掛式馬桶', zh: '掛式馬桶' },
    sub_floor_s: { en: 'Floor-Standing 立式智能馬桶', zh: '立式智能馬桶' },
    sub_wall_s: { en: 'Wall-Hung 掛式智能馬桶', zh: '掛式智能馬桶' },
    browse: { en: 'Browse', zh: '瀏覽' },
    view_all: { en: 'View All', zh: '查看全部' },
    coming_soon: { en: '05 / Coming Soon', zh: '05 / 即將推出' },
    and_so_on: { en: 'and so on…', zh: '更多陸續推出…' },
    more_p: { en: 'New product platforms are continuously added — bidets, urinals, art basins and more.', zh: '陸續新增更多產品平台——婦洗器、小便斗、藝術盆等。' },

    // Stats labels
    s_years_lbl: { en: 'Years of Craft', zh: '年工藝累積' },
    s_models_lbl: { en: 'Models', zh: '產品型號' },
    s_countries_lbl: { en: 'Export Countries', zh: '出口國家' },

    // About card row
    about_founded: { en: 'Founded', zh: '成立' },
    about_north: { en: 'North-American Cert.', zh: '北美認證' },
    about_qms: { en: 'Quality System', zh: '品質系統' },
    about_e2e: { en: 'End-to-End', zh: '一站式' },

    // Sub-page headers
    crumb_home: { en: 'Home', zh: '首頁' },
    crumb_products: { en: 'Products', zh: '產品' },

    // Products page sidebar
    sidebar_cats: { en: 'Categories', zh: '產品分類' },

    // Product detail
    pd_request: { en: 'Request a Quote →', zh: '索取報價 →' },
    pd_dl_spec: { en: 'Download Spec PDF', zh: '下載規格 PDF' },
    pd_specs_lede: { en: 'A timeless freestanding pedestal basin in vitreous china — a clean, contemporary silhouette that fits both classic and modern bathroom platforms.', zh: '經典立式柱盆，玻化瓷材質——簡潔現代輪廓，適配古典與當代浴室空間。' },
    pd_related_h: { en: 'Related <em>models.</em>', zh: '相關<em>型號</em>。' },
    pd_related_p: { en: 'Other freestanding pedestal sinks in the same series.', zh: '同系列其他立式柱盆。' },

    // Contact
    contact_h1: { en: 'Get in touch.', zh: '聯絡我們。' },
    contact_24h: { en: 'Reply within 24h', zh: '24 小時內回覆' },
    contact_oem: { en: 'OEM / ODM Welcome', zh: '歡迎 OEM / ODM' },
    contact_50: { en: '50+ Countries', zh: '50+ 國家' },
    contact_hq: { en: 'Headquarters', zh: '總部' },
    contact_addr: { en: 'Address', zh: '地址' },
    contact_addr_v: { en: 'Chaozhou, Guangdong', zh: '廣東潮州' },
    contact_addr_s: { en: 'China · Manufacturing facility', zh: '中國 · 製造工廠' },
    contact_hours: { en: 'Hours', zh: '營業時間' },
    contact_hours_v: { en: 'Mon — Sat', zh: '週一至週六' },
    contact_hours_s: { en: '09:00 – 18:00 (GMT+8)', zh: '09:00 – 18:00 (GMT+8)' },
    contact_direct: { en: 'Direct Channels', zh: '直接聯絡' },
    contact_phone: { en: 'Phone', zh: '電話' },
    contact_email: { en: 'Email', zh: '電郵' },
    contact_wechat: { en: 'WeChat', zh: '微信' },
    contact_dept: { en: 'Departments', zh: '部門' },
    contact_sales: { en: 'Sales', zh: '銷售部' },
    contact_send: { en: 'Send an Inquiry', zh: '發送詢盤' },

    // OEM
    oem_lede: { en: 'Custom-engineered <em>ceramic platforms</em> — from your sketch to a 40HQ container, all under one roof.', zh: '客製化<em>陶瓷衛浴平台</em>——從草圖到 40 呎櫃，一站式整廠完成。' },
    oem_proc_h: { en: '<em>Four-stage</em> process<br/>from concept to container.', zh: '<em>四階段</em>流程<br/>從概念到出貨。' },
    oem_proc_p: { en: 'End-to-end execution. Typical project lead time is 45 to 60 days.', zh: '一站式執行。典型專案週期 45 至 60 天。' },
    oem_moq_h: { en: 'MOQ &amp; <em>lead times.</em>', zh: '起訂量與<em>交期。</em>' },
    oem_moq_p: { en: 'Typical figures — exact MOQ depends on customisation level.', zh: '參考數值——實際起訂量視客製程度而定。' },
    oem_cta_eb: { en: 'START A PROJECT', zh: '開始專案' },
    oem_cta_h: { en: 'Send us your <em>brief.</em>', zh: '寄來您的<em>需求。</em>' },
    oem_cta_btn: { en: 'Start a Conversation →', zh: '開始對話 →' },

    // News
    news_h1: { en: 'News &amp; Events', zh: '最新消息與活動' },
    news_featured: { en: 'FEATURED · MAR 2026', zh: '焦點 · 2026 年 3 月' },
    news_feat_h: { en: '2026 Product Catalog Released.', zh: '2026 年產品目錄發布。' },
    news_feat_p: { en: '200+ models, full dimensions, glaze options and finish references — the most comprehensive Chengda catalog to date. Now available for download.', zh: '200+ 型號、完整尺寸、釉色選項與表面工藝——程達史上最完整目錄，現已開放下載。' },
    news_dl: { en: 'Download PDF →', zh: '下載 PDF →' },
    news_all: { en: 'All', zh: '全部' },
    news_catalog: { en: 'Catalog', zh: '目錄' },
    news_events: { en: 'Events', zh: '活動' },
    news_launches: { en: 'Launches', zh: '新品' },
    news_cert: { en: 'Certifications', zh: '認證' },

    // Product tabs (dynamic)
    tab_all: { en: 'All', zh: '全部' },
    tab_above: { en: 'Above-counter', zh: '台上盆' },
    tab_semi: { en: 'Semi-recessed', zh: '台中盆' },
    tab_under: { en: 'Undercounter', zh: '台下盆' },
    tab_floor: { en: 'Floor-Standing', zh: '立式' },
    tab_wall: { en: 'Wall-Hung', zh: '掛式' },

    // About page
    about_title: { en: 'About Chengda', zh: '關於程達' },
    about_crumb: { en: 'About us', zh: '關於我們' },
    about_sub1: { en: 'Founded 1999', zh: '成立於 1999' },
    about_sub2: { en: 'Chaozhou · Guangdong', zh: '廣東 · 潮州' },
    about_sub3: { en: '50+ Countries', zh: '50+ 國家' },
    about_lede: { en: 'Twenty-five years of <em>ceramic mastery</em> — engineered in Chaozhou, deployed across every continent.', zh: '二十五年<em>陶瓷工藝</em>——潮州製造，行銷全球。' },
    about_story_h: { en: 'Our Story', zh: '我們的故事' },
    about_story_p1: { en: "Founded in 1999, Guangdong Chengda Intelligent Technology Co., Ltd. is a vertically-integrated ceramic sanitaryware manufacturer headquartered in Chaozhou — China's historic ceramic capital.", zh: '廣東程達智能科技有限公司成立於 1999 年，是垂直整合的陶瓷衛浴製造商，總部位於中國陶瓷之都——潮州。' },
    about_story_p2: { en: 'What started as a small workshop firing pedestal basins has grown into a 200+ model platform serving importers, designers and brands in over 50 countries.', zh: '從一間燒製柱盆的小作坊，成長為擁有 200+ 型號的產品平台，服務 50 多個國家的進口商、設計師與品牌。' },
    about_appr_h: { en: 'Our Approach', zh: '我們的方法' },
    about_appr_p1: { en: 'Every basin and toilet leaves our facility only after passing rigorous QC at every stage: raw clay, slip casting, glazing, high-temperature firing, and final inspection.', zh: '每件衛浴產品出廠前皆經過嚴格品控：原料、注漿、上釉、高溫燒製與最終檢驗。' },
    about_appr_p2: { en: 'We hold CUPC certification for the North-American market and ISO 9001 for our quality management system — the discipline behind every shipment.', zh: '我們擁有北美 CUPC 認證與 ISO 9001 品質管理體系認證——這是每一批出貨背後的紀律。' },
    cap_h: { en: '<em>Capabilities</em><br/>end to end.', zh: '<em>全方位</em><br/>能力。' },
    cap_p: { en: 'From design and prototyping to global logistics — we cover every step under one roof.', zh: '從設計打樣到全球物流——一站式整廠完成。' },
    cap1_h: { en: 'Design & Concept', zh: '設計與構思' },
    cap1_p: { en: '3D modeling, dimensional studies and prototyping — turn references into producible drawings.', zh: '3D 建模、尺寸研究與樣品打樣——將構想轉化為可量產圖面。' },
    cap2_h: { en: 'Sample & Approval', zh: '樣品與確認' },
    cap2_p: { en: 'Physical samples reviewed against tolerances, glaze color and surface finish before tooling.', zh: '依公差、釉色與表面工藝核實實體樣品，方可開模。' },
    cap3_h: { en: 'Production & QC', zh: '生產與品控' },
    cap3_p: { en: 'Slip-cast, dried, glazed, fired and inspected. Strict QC at every stage, with batch traceability.', zh: '注漿、乾燥、上釉、燒製與檢驗。每個階段皆嚴格品控，可追溯至批次。' },
    cap4_h: { en: 'Custom Glazing', zh: '客製釉料' },
    cap4_p: { en: 'White, colored, matte and hand-painted finishes — kiln-fired in our Chaozhou facility.', zh: '白色、彩色、啞光與手繪——於潮州工廠窯燒完成。' },
    cap5_h: { en: 'Packaging', zh: '包裝' },
    cap5_p: { en: 'Custom cartons, foam inserts, branded labels and pallet plans — to your specification.', zh: '客製紙箱、泡棉、品牌標籤與棧板規劃——依需求量身定做。' },
    cap6_h: { en: 'Global Logistics', zh: '全球物流' },
    cap6_p: { en: 'FOB, CIF, DDP — established freight partnerships across North America, Europe, ME, SEA and Africa.', zh: 'FOB、CIF、DDP——與北美、歐洲、中東、東南亞與非洲建立貨運合作。' },
    tl_h: { en: 'Twenty-five<br/><em>milestones.</em>', zh: '二十五<br/><em>里程碑。</em>' },
    tl_p: { en: 'A quarter-century of ceramic engineering.', zh: '四分之一世紀的陶瓷工藝。' },
    tl_1999: { en: 'Chengda founded in Chaozhou. First production line for pedestal basins.', zh: '程達於潮州創立，首條柱盆生產線啟動。' },
    tl_2005: { en: 'First export contract — entering the South-East Asian market.', zh: '首個出口合約——進入東南亞市場。' },
    tl_2010: { en: 'ISO 9001 quality management certification awarded.', zh: '取得 ISO 9001 品質管理體系認證。' },
    tl_2015: { en: 'CUPC certification — products approved for the North-American market.', zh: '取得 CUPC 認證——產品進入北美市場。' },
    tl_2020: { en: 'Catalog reaches 200+ models across 6 product platforms.', zh: '產品目錄達到 6 大平台、200+ 型號。' },
    tl_2024: { en: 'Smart Toilet platform launched — heated seat, auto flush, dual mounting.', zh: '智能馬桶平台上市——加熱座墊、自動沖水、雙安裝方式。' },
    tl_2026: { en: 'Exporting to 50+ countries. Continuously expanding product platforms and markets.', zh: '出口至 50+ 國家。持續拓展產品線與市場。' },
    tl_today: { en: 'TODAY', zh: '至今' },
    partner_eb: { en: 'PARTNER WITH US', zh: '與我們合作' },
    partner_h: { en: 'Build your next <em>collection</em> with us.', zh: '與我們共同打造下一個<em>系列</em>。' },
    partner_btn: { en: 'Start a Conversation →', zh: '開始對話 →' },

    // News
    news_h_eyebrow: { en: 'News & Events', zh: '最新消息與活動' },
    news_crumb: { en: 'News', zh: '最新消息' },
    news_sub1: { en: 'Catalog Releases', zh: '目錄發布' },
    news_sub2: { en: 'Trade Fairs', zh: '展會活動' },
    news_sub3: { en: 'Product Launches', zh: '新品上市' },
    news_feat_full_h: { en: '2026 Product Catalog Released.', zh: '2026 年產品目錄發布。' },
    news_feat_full_p: { en: '200+ models, full dimensions, glaze options and finish references — the most comprehensive Chengda catalog to date. Now available for download.', zh: '200+ 型號、完整尺寸、釉色選項與表面工藝——程達史上最完整目錄，現已開放下載。' },

    // Contact
    contact_crumb: { en: 'Contact', zh: '聯絡' },
    contact_get: { en: 'Get in touch.', zh: '聯絡我們。' },

    // OEM
    oem_crumb: { en: 'OEM / ODM', zh: 'OEM / ODM' },
    oem_h1: { en: 'OEM / ODM', zh: 'OEM / ODM' },

    // Pedestal / Standard pages
    ps_crumb: { en: 'Pedestal Sink', zh: '柱盆' },
    st_crumb: { en: 'Standard Toilet', zh: '普通馬桶' },

    // Contact additions
    contact_dept_oem: { en: 'OEM / ODM', zh: 'OEM / ODM' },
    contact_dept_press: { en: 'Press', zh: '媒體' },
    contact_dept_quotes: { en: 'Quotes · MOQ · lead times', zh: '報價 · 起訂量 · 交期' },
    contact_dept_custom: { en: 'Custom shapes · glazing · packaging', zh: '客製形狀 · 釉料 · 包裝' },
    form_name: { en: 'Name *', zh: '姓名 *' },
    form_company: { en: 'Company', zh: '公司' },
    form_email: { en: 'Email *', zh: '電郵 *' },
    form_phone: { en: 'Phone', zh: '電話' },
    form_country: { en: 'Country', zh: '國家' },
    form_order_type: { en: 'Order Type', zh: '訂單類型' },
    form_product_interest: { en: 'Product Interest', zh: '感興趣的產品' },
    form_qty: { en: 'Estimated Quantity', zh: '預估數量' },
    form_message: { en: 'Message *', zh: '訊息 *' },
    form_24h: { en: 'We respond within 24h', zh: '24 小時內回覆' },
    form_send: { en: 'Send Inquiry →', zh: '發送詢盤 →' },
    form_thanks: { en: 'Thank you.', zh: '謝謝您。' },
    form_thanks_p: { en: 'Inquiry received. Our team will respond within 24 hours.', zh: '已收到詢盤，我們將於 24 小時內回覆。' },
    order_wholesale: { en: 'Wholesale / Distribution', zh: '批發 / 經銷' },
    order_oem: { en: 'OEM / ODM', zh: 'OEM / ODM' },
    order_project: { en: 'Project / Hospitality', zh: '工程 / 飯店專案' },
    order_sample: { en: 'Sample / Inquiry', zh: '樣品 / 一般諮詢' },
    pi_wash: { en: 'Washbasin (台上盆 / 台中盆 / 台下盆)', zh: '洗手盆（台上盆 / 台中盆 / 台下盆）' },
    pi_ped: { en: 'Pedestal Sink (立式 / 掛式)', zh: '柱盆（立式 / 掛式）' },
    pi_std: { en: 'Standard Toilet (立式 / 掛式)', zh: '普通馬桶（立式 / 掛式）' },
    pi_smart: { en: 'Smart Toilet (立式 / 掛式)', zh: '智能馬桶（立式 / 掛式）' },
    pi_custom: { en: 'Custom — describe in message', zh: '客製——請於訊息中說明' },
    map_corner: { en: 'MAP · GUANGDONG, CHINA · 23.66°N 116.62°E', zh: '地圖 · 中國廣東 · 23.66°N 116.62°E' },
    pin_lbl: { en: 'Chaozhou · 潮州', zh: '潮州 · CHAOZHOU' },

    // Subpage tabs (toilet/pedestal)
    tab_wallhung: { en: 'Wall-Hung Toilet', zh: '掛式馬桶' },
    tab_floormount: { en: 'Floor-Mounted Toilet', zh: '立式馬桶' },
    tab_floor_p: { en: 'Floor-Standing', zh: '立式柱盆' },
    tab_wall_p: { en: 'Wall-Hung', zh: '掛式柱盆' },

    // Standard toilet page
    st_h1: { en: 'Standard Toilet', zh: '普通馬桶' },
    st_lede: { en: 'Vitreous-china toilets in <em>two mounting platforms</em> — wall-hung and floor-mounted, both engineered for durability and a clean architectural line.', zh: '玻化瓷馬桶，提供<em>兩種安裝平台</em>——掛式與立式，皆為耐用與簡潔線條而設計。' },
    
    // Pedestal page
    ps_h1: { en: 'Pedestal Sink', zh: '柱盆' },
    ps_lede: { en: 'Vitreous-china pedestal sinks in two mounting platforms — <em>floor-standing</em> classics and <em>wall-hung</em> contemporaries.', zh: '玻化瓷柱盆，兩種安裝平台——<em>立式</em>經典與<em>掛式</em>現代。' },

    // Pedestal/Standard chips
    chip_wall_short: { en: 'Wall-Hung', zh: '掛式' },
    chip_floor_short: { en: 'Floor-Standing', zh: '立式' },

    // Subpage hero subs
    sub_wallhung: { en: 'Wall-Hung', zh: '掛式' },
    sub_floorstanding: { en: 'Floor-Standing', zh: '立式' },
    sub_wallhung_t: { en: 'Wall-Hung Toilet', zh: '掛式馬桶' },
    sub_floormount_t: { en: 'Floor-Mounted Toilet', zh: '立式馬桶' },

    // OEM
    oem_lede2: { en: 'Custom-engineered <em>ceramic platforms</em> — from your sketch to a 40HQ container, all under one roof.', zh: '客製化<em>陶瓷衛浴平台</em>——從草圖到 40 呎櫃，一站式整廠完成。' },

    // Carousel tops
    car_t_w_count: { en: '60+ models', zh: '60+ 型號' },
    car_t_p_count: { en: '12 models', zh: '12 型號' },
    car_t_s_count: { en: '28 models', zh: '28 型號' },
    car_t_smart_new: { en: 'NEW', zh: '新品' },
    car_t_w: { en: '01 / Washbasin', zh: '01 / 洗手盆' },
    car_t_p: { en: '02 / Pedestal Sink', zh: '02 / 柱盆' },
    car_t_s: { en: '03 / Standard Toilet', zh: '03 / 普通馬桶' },
    car_t_smart: { en: '04 / Smart Toilet', zh: '04 / 智能馬桶' },
    // Carousel card titles (bilingual EN+CN -> ZH+EN)
    card_h_w: { en: 'Washbasin <span class="cn">洗手盆</span>', zh: '洗手盆 <span class="cn">WASHBASIN</span>' },
    card_h_p: { en: 'Pedestal Sink <span class="cn">柱盆</span>', zh: '柱盆 <span class="cn">PEDESTAL SINK</span>' },
    card_h_s: { en: 'Standard Toilet <span class="cn">普通馬桶</span>', zh: '普通馬桶 <span class="cn">STANDARD TOILET</span>' },
    card_h_smart: { en: 'Smart Toilet <span class="cn">智能馬桶</span>', zh: '智能馬桶 <span class="cn">SMART TOILET</span>' },
    // Home news cards
    home_news_date1: { en: 'MAR · 2026', zh: '2026 · 03' },
    home_news_tag1: { en: 'CATALOG', zh: '目錄' },
    home_news_h1: { en: '2026 Product Catalog Released — full specs &amp; dimensions for 200+ models.', zh: '2026 年產品目錄發布——200+ 型號完整規格與尺寸。' },
    home_news_date2: { en: 'JAN · 2026', zh: '2026 · 01' },
    home_news_tag2: { en: 'EVENT', zh: '活動' },
    home_news_h2: { en: 'Canton Fair 2026 — Booth H12. Meet our team in Guangzhou.', zh: '2026 廣交會——H12 號展位，與我們在廣州相見。' },
    home_news_date3: { en: 'DEC · 2025', zh: '2025 · 12' },
    home_news_tag3: { en: 'LAUNCH', zh: '新品' },
    home_news_h3: { en: 'Colorful Art Basin Series launched — 7 series, 15+ hand-painted colors.', zh: '多彩藝術盆系列上市——7 大系列、15+ 手繪色彩。' },
    read_more: { en: 'Read more →', zh: '閱讀更多 →' },
    // Home contact info values
    home_addr_v: { en: 'Chaozhou, Guangdong, China', zh: '中國廣東潮州' },
    home_hours_v: { en: 'Mon — Sat · 09:00 – 18:00 (GMT+8)', zh: '週一至週六 · 09:00 – 18:00 (GMT+8)' },
    // Home form
    f_name: { en: 'Name', zh: '姓名' },
    f_company: { en: 'Company', zh: '公司' },
    f_email: { en: 'Email', zh: '電郵' },
    f_phone: { en: 'Phone', zh: '電話' },
    f_pi: { en: 'Product Interest', zh: '感興趣的產品' },
    f_msg: { en: 'Message', zh: '訊息' },
    f_select_cat: { en: 'Select category…', zh: '選擇分類…' },
    f_msg_ph: { en: 'Tell us about your project — quantities, customization, target market…', zh: '請告訴我們專案細節——數量、客製需求、目標市場…' },

    // Blog
    nav_blog: { en: 'Blog', zh: '部落格' },
    blog_h1: { en: 'Journal', zh: '專欄誌' },
    blog_sub1: { en: 'Care & Maintenance', zh: '保養與維護' },
    blog_sub2: { en: 'Industry Insights', zh: '產業觀點' },
    blog_sub3: { en: 'Design Notes', zh: '設計筆記' },
    blog_feat_tag: { en: 'FEATURED · CRAFT', zh: '精選 · 工藝' },
    blog_feat_h: { en: 'From clay to <em>vitreous china</em> — what makes a Chengda basin different.', zh: '從黏土到<em>玻化瓷</em>——程達洗手盆與眾不同之處。' },
    blog_feat_p: { en: 'A walkthrough of our 14-step ceramic process — from raw kaolin sourcing to the 1,250 °C kiln cycle that gives every Chengda piece its glass-hard, low-porosity finish.', zh: '走進程達 14 道陶瓷工序——從高嶺土選料到 1,250°C 窯燒，造就每件作品如玻璃般堅硬、低孔隙率的表面。' },
    blog_read_full: { en: 'Read the full piece', zh: '閱讀全文' },
    blog_f_all: { en: 'All', zh: '全部' },
    blog_f_care: { en: 'Care & Maintenance', zh: '保養與維護' },
    blog_f_craft: { en: 'Craft & Industry', zh: '工藝與產業' },
    blog_f_design: { en: 'Design Notes', zh: '設計筆記' },
    blog_f_oem: { en: 'OEM Playbook', zh: 'OEM 操作手冊' },
    blog_search_ph: { en: 'Search articles…', zh: '搜尋文章…' },
    news_letter_h: { en: 'Quarterly <em>journal</em>, straight to your inbox.', zh: '季度<em>專欄誌</em>，直送您的信箱。' },
    news_letter_p: { en: 'New articles, catalog drops and trade-fair invites. No spam — about 4 emails a year.', zh: '新文章、目錄發布與展會邀請。不寄垃圾信——一年約 4 封。' },
    news_letter_ph: { en: 'your@email.com', zh: '您的電子郵件' },
    news_letter_btn: { en: 'Subscribe', zh: '訂閱' },
    blog_share: { en: 'Share this article', zh: '分享本文' },
    blog_copy: { en: 'Copy link', zh: '複製連結' },
    blog_email: { en: 'Email', zh: '寄送電郵' },
    blog_related: { en: 'Continue reading', zh: '繼續閱讀' },
  };

  function getLang() { return localStorage.getItem('cd_lang') || 'en'; }
  function setLang(l) { localStorage.setItem('cd_lang', l); apply(); }

  function apply() {
    const lang = getLang();
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-Hant');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const v = D[key]?.[lang];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      // format: "attr:key,attr:key"
      spec.split(',').forEach(pair => {
        const [a, k] = pair.split(':');
        const v = D[k.trim()]?.[lang];
        if (v != null) el.setAttribute(a.trim(), v);
      });
    });
    document.querySelectorAll('.lang-switch').forEach(sw => {
      sw.innerHTML = lang === 'en'
        ? '<span class="on">EN</span> / <a href="#" data-set-lang="zh" style="color:inherit">中文</a>'
        : '<a href="#" data-set-lang="en" style="color:inherit">EN</a> / <span class="on">中文</span>';
    });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-set-lang]');
    if (!a) return;
    e.preventDefault();
    setLang(a.getAttribute('data-set-lang'));
  });

  window.__applyI18n = apply;
  document.addEventListener('DOMContentLoaded', apply);
  apply();
})();
