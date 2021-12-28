export function appHtml() {
  const element = document.createElement('div');
  //组件html
  let mHtmls = `
    <h2>theme</h2>
    <wc-button type="primary" class="theme-button" style="--themeColor:#1E90FF">#1E90FF</wc-button>
    <wc-button type="primary" class="theme-button" style="--themeColor:#F44336">#F44336</wc-button>
    <wc-button type="primary" class="theme-button" style="--themeColor:#9c27b0">#9c27b0</wc-button>
    <wc-button type="primary" class="theme-button" style="--themeColor:#009688">#009688</wc-button>
    <wc-button type="primary" class="theme-button" style="--themeColor:#3F51B5">#3F51B5</wc-button>
    <h2>button</h2>
    <p>normal</p>
    <wc-button type="primary" id="btn">primary</wc-button>
    <wc-button type="dashed">dashed</wc-button>
    <wc-button type="flat">flat</wc-button>
    <wc-button>default</wc-button>
    <wc-button type="primary" loading>loading</wc-button>
    <p>with icon</p>
    <wc-button type="primary" icon="heart" shape="circle"></wc-button>
    <wc-button type="dashed" icon="heart" shape="circle"></wc-button>
    <wc-button type="flat" icon="heart" shape="circle"></wc-button>
    <wc-button icon="heart" shape="circle"></wc-button>
    <wc-button type="primary" icon="heart">like</wc-button>
    <wc-button type="dashed" icon="search">search</wc-button>
    <wc-button type="flat" icon="left">back</wc-button>
    <wc-button icon="link">link</wc-button>
    <p>block</p>
    <wc-button type="primary" block><a>primary</a></wc-button>
    <wc-button type="dashed" block>dashed</wc-button>
    <wc-button type="flat" block>flat</wc-button>
    <wc-button block>default</wc-button>
    <p>disabled</p>
    <wc-button disabled type="primary" onclick="WcMessage.info('This a info message')"><a>primary</a></wc-button>
    <wc-button disabled type="dashed">dashed</wc-button>
    <wc-button disabled type="flat">flat</wc-button>
    <wc-button disabled >default</wc-button>
    <h2>slider</h2>
    <wc-slider onchange="console.log(event)"></wc-slider>
    <wc-slider defaultvalue="100" min="0" max="300" step="5"></wc-slider>
    <wc-slider defaultvalue="30" min="-100" max="100" step="1"></wc-slider>
    <wc-slider defaultvalue="100" min="10" max="200" step="2" showtips></wc-slider>
    <wc-slider defaultvalue="150" min="10" max="200" step="2" disabled></wc-slider>
    <wc-slider style="height:200px" vertical showtips defaultvalue="150" min="10" max="200" step="2"></wc-slider>
    <h2>loading</h2>
    <wc-loading></wc-loading>
    <wc-loading size="40" color="green"></wc-loading>
    <wc-loading size="60" color="olivedrab"></wc-loading>
    <wc-loading size="80" color="orange"></wc-loading>
    <h2>switch</h2>
    <wc-switch onchange="console.log(event)" checked></wc-switch>
    <wc-switch></wc-switch>
    <wc-switch disabled checked></wc-switch>
    <h2>checkbox</h2>
    <wc-checkbox name="lang" onchange="console.log(event)" checked>Html</wc-checkbox>
    <wc-checkbox name="lang">Css</wc-checkbox>
    <wc-checkbox name="lang" checked>Javascript</wc-checkbox>
    <wc-checkbox name="lang">Python</wc-checkbox>
    <wc-checkbox name="lang">Php</wc-checkbox>
    <wc-checkbox name="lang">Dart</wc-checkbox>
    <wc-checkbox name="lang">Swift</wc-checkbox>
    <wc-checkbox name="lang" disabled>Other</wc-checkbox>
    <h2>radio</h2>
    <p>javascript</p>
    <wc-radio onchange="console.log(event)" name="library" checked>React</wc-radio>
    <wc-radio name="library">Vue</wc-radio>
    <wc-radio name="library">Angular</wc-radio>
    <wc-radio name="library">Other</wc-radio>
    <wc-radio name="library" disabled>disabled</wc-radio>
    <p>display</p>
    <wc-radio onchange="console.log(event)" name="display" checked>block</wc-radio>
    <wc-radio name="display" value="inline-block">inline-block</wc-radio>
    <wc-radio name="display" value="inline">inline</wc-radio>
    <wc-radio name="display" value="flex">flex</wc-radio>
    <wc-radio name="display" value="grid">grid</wc-radio>
    <wc-radio name="display" value="table">table</wc-radio>
    <wc-radio name="display" value="other">other</wc-radio>
    <h2>tips</h2>
    <p>normal</p>
    <wc-tips tips="some tips"><wc-button>auto</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="top"><wc-button>top</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="right"><wc-button>right</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="bottom"><wc-button>bottom</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="left"><wc-button>left</wc-button></wc-tips>
    <wc-tips tips="some some some some some some some some some some some some some some tips"><wc-button>some tips</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="topleft"><wc-button>topleft</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="topright"><wc-button>topright</wc-button></wc-tips>
    <wc-tips tips="some some some some some some some some some some some some some some tips" dir="righttop"><wc-button>righttop</wc-button></wc-tips>
    <wc-tips tips="some some some some some some some some some some some some some some tips" dir="rightbottom"><wc-button>rightbottom</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="bottomleft"><wc-button>bottomleft</wc-button></wc-tips>
    <wc-tips tips="some tips" dir="bottomright"><wc-button>bottomright</wc-button></wc-tips>
    <wc-tips tips="some some some some some some some some some some some some some some tips" dir="lefttop"><wc-button>lefttop</wc-button></wc-tips>
    <wc-tips tips="some some some some some some some some some some some some some some tips" dir="leftbottom"><wc-button>leftbottom</wc-button></wc-tips>
    <p>status</p>
    <wc-tips tips="some tips" type="success"><wc-button>success</wc-button></wc-tips>
    <wc-tips tips="some tips" type="warning"><wc-button>warning</wc-button></wc-tips>
    <wc-tips tips="some tips" type="error"><wc-button>error</wc-button></wc-tips>
    <wc-tips tips="some tips" color="orangered"><wc-button>custom color</wc-button></wc-tips>
    <h2>select</h2>
    <wc-select onchange="console.log(event)">
        <wc-option value="1">Option1</wc-option>
        <wc-option value="2"><a>Option2</a></wc-option>
        <wc-option value="3">Option3</wc-option>
    </wc-select>
    <wc-select defaultvalue="2" id="select" type="flat">
        <wc-option value="1">Option1</wc-option>
        <wc-option value="2">Option2</wc-option>
        <wc-option value="3">Option3</wc-option>
        <wc-option value="4">Option4444</wc-option>
    </wc-select>
    <wc-select defaultvalue="2" disabled>
        <wc-option value="1">Option1</wc-option>
        <wc-option value="2">Option2</wc-option>
        <wc-option value="3">Option3</wc-option>
        <wc-option value="4">Option4444</wc-option>
    </wc-select>
    <h2>icon</h2>
    <p>name</p>
    <wc-icon name="user" size="30" color="orangered"></wc-icon>
    <wc-icon name="location" size="30" color="orangered"></wc-icon>
    <wc-icon name="message" size="30" color="#1E90FF"></wc-icon>
    <wc-icon name="heart" size="30" color="#F44336"></wc-icon>
    <wc-icon name="send" size="50" color="#3F51B5"></wc-icon>
    <wc-icon name="comment" size="50" color="#3F51B5"></wc-icon>
    <wc-icon name="audio" size="50" color="#3F51B5"></wc-icon>
    <p>path</p>
    <wc-icon size="50" color="#3F51B5" path="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></wc-icon>
    <wc-icon size="50" color="#3F51B5" path="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></wc-icon>
    <wc-icon size="50" color="#3F51B5" view="48" path="M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z"></wc-icon>
    <h2>tab</h2>
    <p>label</p>
    <wc-tab activekey="aaa" onchange="console.log(event)">
        <wc-tab-content label="tab1">
            A placeholder inside a web
            component that users can fill with their own markup,
            with the effect of composing different DOM trees
            together.
        </wc-tab-content>
        <wc-tab-content label="tab2" disabled>
            A placeholder inside a web
            component that users can fill with their own markup,
            with the effect of composing different DOM trees
            together.
        </wc-tab-content>
        <wc-tab-content label="tab3" key="aaa">
            A placeholder inside a web
            component that users can fill with their own markup,
            with the effect of composing different DOM trees
            together.
        </wc-tab-content>
    </wc-tab>
    <p>scrollable</p>
    <wc-tab>
        <wc-tab-content label="tab1">tab1</wc-tab-content>
        <wc-tab-content label="tab2">tab2</wc-tab-content>
        <wc-tab-content label="tab3">tab3</wc-tab-content>
        <wc-tab-content label="tab4">tab4</wc-tab-content>
        <wc-tab-content label="tab5">tab5</wc-tab-content>
        <wc-tab-content label="tab6">tab6</wc-tab-content>
        <wc-tab-content label="tab7">tab7</wc-tab-content>
        <wc-tab-content label="tab8">tab8</wc-tab-content>
        <wc-tab-content label="tab9">tab9</wc-tab-content>
        <wc-tab-content label="tab10">tab10</wc-tab-content>
    </wc-tab>
    <p>label with icon</p>
    <wc-tab>
        <wc-tab-content label="home" icon="home">tab1</wc-tab-content>
        <wc-tab-content label="message" icon="message">tab2</wc-tab-content>
        <wc-tab-content label="user" icon="user">tab3</wc-tab-content>
    </wc-tab>
    <p>only icon</p>
    <wc-tab>
        <wc-tab-content icon="home">tab1</wc-tab-content>
        <wc-tab-content icon="message">tab2</wc-tab-content>
        <wc-tab-content icon="user">tab3</wc-tab-content>
    </wc-tab>
    <h2>layout</h2>
    <wc-layout class="layout">
        <wc-layout class="header">HEADER</wc-layout>
        <wc-layout row expand>
            <wc-layout class="side"></wc-layout>
            <wc-layout expand center class="main">
                <wc-layout center class="box">wc-layout</wc-layout>
            </wc-layout>
            <wc-layout class="side"></wc-layout>
        </wc-layout>
        <wc-layout class="footer">FOOTER</wc-layout>
    </wc-layout>
    <h2>grid</h2>
    <wc-row gutter="10">
        <wc-col span="8">11</wc-col>
        <wc-col span="8">22</wc-col>
        <wc-col span="16">22</wc-col>
    </wc-row>
    <h2>dialog</h2>
    <wc-button type="primary" onclick="showDialog()">open dialog</wc-button>
    <wc-button onclick="WcDialog.alert('alert')">alert</wc-button>
    <wc-button id="confirm-btn">confirm</wc-button>
    <wc-button onclick="WcDialog.info('info')">info</wc-button>
    <wc-button onclick="WcDialog.success({title:'成功',content:'success',oktext:'send'})">success</wc-button>
    <wc-button onclick="WcDialog.error('error')">error</wc-button>
    <wc-button onclick="WcDialog.warning('warning')">warning</wc-button>
    <wc-dialog id="dialog02">232</wc-dialog>
    <wc-dialog id="dialog01" title="标题" oktext="确 定" canceltext="取消" >
        <wc-tab>
            <wc-tab-content label="tab1">tab1</wc-tab-content>
            <wc-tab-content label="tab2">tab2</wc-tab-content>
            <wc-tab-content label="tab3">tab3</wc-tab-content>
            <wc-tab-content label="tab4">tab4</wc-tab-content>
            <wc-tab-content label="tab5">tab5</wc-tab-content>
            <wc-tab-content label="tab6">tab6</wc-tab-content>
            <wc-tab-content label="tab7">tab7</wc-tab-content>
            <wc-tab-content label="tab8">tab8</wc-tab-content>
            <wc-tab-content label="tab9">tab9</wc-tab-content>
            <wc-tab-content label="tab10">tab10</wc-tab-content>
        </wc-tab>
    </wc-dialog>
    <h2>popover</h2>
    <wc-popover type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>pop confirm</wc-button></wc-popover>
    <wc-popover disabled type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>pop confirm disabled</wc-button></wc-popover>
    <wc-popover>
        <wc-button>pop confirm</wc-button>
        <wc-popcon title="确定删除吗?" type="confirm" onsubmit="console.log('ok')">
            <div>
                <div>自定义删除后无法撤销</div>
                <div>删除后无法撤销</div>
                <div>删除后无法撤销</div>
                <div>删除后无法撤销</div>
                <div>删除后无法撤销</div>
            </div>
        </wc-popcon>
    </wc-popover>
    <wc-popover>
        <wc-button>pop pane</wc-button>
        <wc-popcon type="pane" title="提示">
            <div>
                <div>这是一段提示提示提示提示提示</div>
                <div>这是一段提示</div>
                <div>这是一段提示</div>
                <div>这是一段提示</div>
                <div>这是一段提示</div>
            </div>
        </wc-popcon>
    </wc-popover>
    <wc-popover>
        <wc-button>pop flat</wc-button>
        <wc-popcon>
            <div>
                <div>这是一段提示提示提示</div>
                <div>这是一段提示</div>
                <div>这是一段提示</div>
                <div>这是一段提示</div>
                <div>这是一段提示</div>
            </div>
        </wc-popcon>
    </wc-popover>
    <p>dir</p>
    <wc-popover dir="top" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>top</wc-button></wc-popover>
    <wc-popover dir="right" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>right</wc-button></wc-popover>
    <wc-popover dir="bottom" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>bottom</wc-button></wc-popover>
    <wc-popover dir="left" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>left</wc-button></wc-popover>
    <wc-popover dir="lefttop" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>lefttop</wc-button></wc-popover>
    <wc-popover dir="leftbottom" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>leftbottom</wc-button></wc-popover>
    <wc-popover dir="topleft" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>topleft</wc-button></wc-popover>
    <wc-popover dir="topright" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>topright</wc-button></wc-popover>
    <wc-popover dir="righttop" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>righttop</wc-button></wc-popover>
    <wc-popover dir="rightbottom" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>rightbottom</wc-button></wc-popover>
    <wc-popover dir="bottomleft" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>bottomleft</wc-button></wc-popover>
    <wc-popover dir="bottomright" type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销"><wc-button>bottomright</wc-button></wc-popover>
    <h2>color-picker</h2>
    <wc-color-picker defaultvalue="orangered" dir="righttop" onchange="console.log(event)"></wc-color-picker>
    <wc-color-pane defaultvalue="orangered" dir="righttop" onchange="console.log(event)"></wc-color-pane>
    <h2>date-picker</h2>
    <p>type="date"</p>
    <wc-date-picker></wc-date-picker>
    <wc-date-picker  defaultvalue="2018-02-28"></wc-date-picker>
    <p>type="month"</p>
    <wc-date-picker type="month"></wc-date-picker>
    <wc-date-picker type="month" defaultvalue="2019-02"></wc-date-picker>
    <p>type="year"</p>
    <wc-date-picker type="year"></wc-date-picker>
    <wc-date-picker type="year" defaultvalue="2018"></wc-date-picker>
    <p>min、max</p>
    <wc-date-picker min="2016-10-20" max="2023-3-5"></wc-date-picker>
    <wc-date-picker type="month" min="2010-10" max="2025-3"></wc-date-picker>
    <wc-date-picker type="year" min="2010" max="2020"></wc-date-picker>
    <p>range</p>
    <wc-date-picker range min="2016-10-20" max="2023-3-5" defaultvalue="2019-10-01~2019-12-25"></wc-date-picker>
    <wc-date-picker range type="month" min="2010-10" max="2025-3"></wc-date-picker>
    <wc-date-picker range type="year"></wc-date-picker>
    <p>pane</p>
    <wc-date-pane style="width:400px"></wc-date-pane>
    <h2>message</h2>
    <wc-button onclick="WcMessage.info('This a info message')">info</wc-button>
    <wc-button onclick="WcMessage.success('This a success message')">success</wc-button>
    <wc-button onclick="WcMessage.error('This a error message')">error</wc-button>
    <wc-button onclick="WcMessage.warning('This a warning message')">warning</wc-button>
    <wc-button onclick="WcMessage.loading('This a loading message')">loading</wc-button>
    <h2>input</h2>
    <p>placeholder</p>
    <wc-input placeholder="user" defaultvalue="xboxyan"></wc-input>
    <wc-input placeholder="location"></wc-input>
    <p>label</p>
    <wc-input label="user" defaultvalue="xboxyan"></wc-input>
    <wc-input label="location"></wc-input>
    <p>icon</p>
    <wc-input icon="user"></wc-input>
    <wc-input icon="location" onchange="console.log(event)"></wc-input>
    <p>block</p>
    <wc-input label="info" block></wc-input>
    <p>disabled</p>
    <wc-input icon="lock" type="password" disabled></wc-input>
    <p>type[password]</p>
    <wc-input icon="lock" type="password"></wc-input>
    <p>type[search]</p>
    <wc-input type="search" onsubmit="console.log(event)"></wc-input>
    <p>type[number]</p>
    <wc-input icon="creditcard" type="number" ></wc-input>
    <wc-input icon="creditcard" type="number" min="-10" max="10" step="0.3" ></wc-input>
    <p>validity</p>
    <wc-input icon="creditcard" required placeholder="required"></wc-input>
    <wc-input icon="user" required placeholder="minlength,maxlength" minlength="6" maxlength="10"></wc-input>
    <wc-input icon="mail" type="email" placeholder="email" minlength="5" errordir="right"></wc-input>
    <wc-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="pattern[^1(3|4|5|6|7|8|9)\d{9}$]" errortips="请输入手机号"></wc-input>
    <p>textarea</p>
    <wc-textarea required  placeholder="required"  minlength="10"></wc-textarea>
    <wc-textarea placeholder="rows" rows="5" ></wc-textarea>
    <wc-textarea label="info" placeholder="info" ></wc-textarea>
    <wc-textarea icon="location" placeholder="location" ></wc-textarea>
    <p>datalist</p>
    <wc-input list="city"></wc-input>
    <wc-datalist id="city">
        <wc-option value="wuhan">武汉</wc-option>
        <wc-option value="beijin">北京</wc-option>
        <wc-option value="shanghai">上海</wc-option>
    </wc-datalist>
    <wc-input list="email"></wc-input>
    <wc-datalist id="email">
        <wc-option value="\${value}@live.com">@live.com</wc-option>
        <wc-option value="\${value}@qq.com">@qq.com</wc-option>
        <wc-option value="\${value}@yuewen.com">@yuewen.com</wc-option>
    </wc-datalist>
    <h2>img</h2>
    <p>src</p>
    <wc-img src="https://images.pexels.com/photos/1274640/pexels-photo-1274640.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></wc-img>
    <p>lazy</p>
    <wc-img lazy src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image-keyboard"></wc-img>
    <wc-img lazy src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wc-img>
    <wc-img lazy src="https://images.pexels.com/xxx.jpg" alt="image-keyboard"></wc-img>
    <p>ratio</p>
    <wc-img lazy ratio="16/9" src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image-keyboard"></wc-img>
    <wc-img lazy ratio="3/2" src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wc-img>
    <wc-img lazy ratio="1/1" src="https://images.pexels.com/xxx.jpg" alt="image-keyboard"></wc-img>
    <p>defaultsrc</p>
    <wc-img lazy alt="image-keyboard" src="https://images.pexels.com/xxx.jpg" defaultsrc="https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wc-img>
    <wc-img lazy src="https://images.pexels.com/xxx.jpg" defaultsrc="https://images.pexels.com/xxxx.jpg"></wc-img>
    <p>gallery</p>
    <wc-img lazy gallery src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=650&w=940"></wc-img>
    <wc-img lazy gallery src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wc-img>
    <wc-img lazy gallery src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wc-img>
    <wc-img lazy gallery alt="image-keyboard" src="https://images.pexels.com/xxx.jpg" defaultsrc="https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></wc-img>
    <h2>rate</h2>
    <wc-rate onchange="console.log(event)"></wc-rate>
    <p>tips</p>
    <wc-rate defaultvalue="1" tips="terrible,bad,normal,good,wonderful"></wc-rate>
    <p>disabled</p>
    <wc-rate disabled defaultvalue="2"></wc-rate>
    <h2>form</h2>
    <wc-form action="/login" method="post" labelwidth="100">
        <wc-form-item legend="user">
            <wc-input name="user" required placeholder="user"></wc-input>
        </wc-form-item>
        <wc-form-item legend="password">
            <wc-input name="password" id="password" required type="password" placeholder="password" minlength="6"></wc-input>
        </wc-form-item>
        <wc-form-item legend="password align">
            <wc-input name="password_confirm" id="password_confirm" required type="password" placeholder="password confirm"></wc-input>
        </wc-form-item>
        <wc-form-item legend="city">
            <wc-select name="city">
                <wc-option value="wuhan">wuhan</wc-option>
                <wc-option value="beijin">beijin</wc-option>
                <wc-option value="shanghai">shanghai</wc-option>
            </wc-select>
        </wc-form-item>
        <wc-form-item legend="books">
            <wc-checkbox-group name="books" required min="2" max="3" defaultvalue="Angular">
                <wc-checkbox>React</wc-checkbox>
                <wc-checkbox>Vue</wc-checkbox>
                <wc-checkbox>Angular</wc-checkbox>
                <wc-checkbox>Flutter</wc-checkbox>
                <wc-checkbox>Swift</wc-checkbox>
            </wc-checkbox-group>
        </wc-form-item>
        <wc-form-item legend="lang">
            <wc-radio-group name="lan" required>
                <wc-radio>Html</wc-radio>
                <wc-radio>Css</wc-radio>
                <wc-radio>Javascript</wc-radio>
                <wc-radio>Php</wc-radio>
                <wc-radio>Dart</wc-radio>
            </wc-radio-group>
        </wc-form-item>
        <wc-form-item>
            <wc-checkbox name="read" checked required value="read">I have read</wc-checkbox>
        </wc-form-item>
        <wc-form-item>
            <wc-button type="primary" htmltype="submit">submit</wc-button>
            <wc-button htmltype="reset">reset</wc-button>
        </wc-form-item>
    </wc-form>
    <h2>view</h2>
    <p>coord</p>
    <wc-view class="parent" coord>
        <wc-view class="child" coord="x2,y2"></wc-view>
    </wc-view>
    <p>draggable & allowdrop</p>
    <wc-view draggable></wc-view>
    <wc-view allowdrop class="dropbox dropbox-parent" ondrop="console.log(this)">
        <wc-view allowdrop class="dropbox" ondrop="console.log(this)"></wc-view>
        <div class="dropbox" ondrop="console.log(this)"></div>
    </wc-view>
    <button id="fakebutton">focus</button>
    <p>resizable</p>
    <wc-view resizable draggable>edit</wc-view>
    <h2>table</h2>
    <wc-table thead="Name,Age,Address">
        <wc-tr>
            <wc-td>John Brown</wc-td>
            <wc-td>32</wc-td>
            <wc-td>New York No. 1 Lake Park</wc-td>
        </wc-tr>
        <wc-tr>
            <wc-td>Jim Green</wc-td>
            <wc-td>42</wc-td>
            <wc-td>London No. 1 Lake Park</wc-td>
        </wc-tr>
        <wc-tr>
            <wc-td>Jim Green</wc-td>
            <wc-td>42</wc-td>
            <wc-td>London No. 1 Lake Park</wc-td>
        </wc-tr>
        <wc-tr>
            <wc-td>Jim Green</wc-td>
            <wc-td>42</wc-td>
            <wc-td>London No. 1 Lake Park</wc-td>
        </wc-tr>
        <wc-tr>
            <wc-td>Jim Green</wc-td>
            <wc-td>42</wc-td>
            <wc-td>London No. 1 Lake Park</wc-td>
        </wc-tr>
    </wc-table>
    <h2>text</h2>
    <wc-text>wc-ui is a front end cross-framework ui library based on web-components</wc-text>
    <br>
    <wc-text>wc-ui</wc-text>
    <br>
    <wc-text type="warning">wc-ui</wc-text>
    <br>
    <wc-text type="error">wc-ui</wc-text>
    <br>
    <wc-text type="success">wc-ui</wc-text>
    <br>
    <wc-text mark>wc-ui</wc-text>
    <br>
    <wc-text code>wc-ui</wc-text>
    <br>
    <wc-text rows="3">wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.wc-ui is a front end cross-framework ui library based on web-components.</wc-text>
    <h2>pagination</h2>
    <wc-pagination onchange="console.log(this.current)" pagesize="3" total="50" defaultcurrent="9"></wc-pagination>
    <wc-pagination simple onchange="console.log(this.current)" pagesize="3" total="50" defaultcurrent="9"></wc-pagination>
  `;
  element.innerHTML = mHtmls;
  
  return element;
}

export function myInit(){
  document.getElementById('btn').addEventListener('click',function(ev){
        console.log(ev)
    })
    
    document.getElementById('select').onchange = function(ev){
        console.log(ev)
    }
    document.getElementById('dialog01').addEventListener('submit',function(){
        
    })
    document.getElementById('dialog01').onsubmit = function(){
        this.loading = true;
        new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        }).then(()=>{
            this.open = false
        })
    }
    document.getElementById('dialog01').oncancel = function(){
        console.log('2')
    }
    document.getElementById('confirm-btn').onclick = function(ev){
        WcDialog.confirm({
            header:'确定要删除吗',
            type:'error',
            content:'一旦删除无法还原',
            oktext:'删除',

        })
    }
    document.querySelectorAll('.theme-button').forEach((el)=>{
        el.addEventListener('click',function(){
            const themeColor = window.getComputedStyle(el).getPropertyValue('--themeColor');
            document.body.style.setProperty('--themeColor',themeColor);
        })
    })

    
    document.getElementById('password_confirm').customValidity = {
        method:(el)=>{
            return el.value == document.getElementById('password').value;
        },
        tips:'前后密码不一致'
    }
}

window.showDialog = function(){
  document.getElementById('dialog01').open = true;
}