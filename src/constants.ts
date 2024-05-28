export const LOREM_IPSUM_TITLE = 'Lorem Ipsum title'
export const LOREM_IPSUM_BODY = `
<h1>HTML Ipsum Presents</h1>

\t\t\t\t<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

\t\t\t\t<h2>Header Level 2</h2>

\t\t\t\t<ol>
\t\t\t\t   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
\t\t\t\t   <li>Aliquam tincidunt mauris eu risus.</li>
\t\t\t\t</ol>

\t\t\t\t<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

\t\t\t\t<h3>Header Level 3</h3>

\t\t\t\t<ul>
\t\t\t\t   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
\t\t\t\t   <li>Aliquam tincidunt mauris eu risus.</li>
\t\t\t\t</ul>

\t\t\t\t<pre><code>
\t\t\t\t#header h1 a {
\t\t\t\t  display: block;
\t\t\t\t  width: 300px;
\t\t\t\t  height: 80px;
\t\t\t\t}
\t\t\t\t</code></pre>
`

export const LIBRARIES = [
    {title: 'ReactJS / NextJS (Frameworks)', detail: 'react / react-dom / next'},
    {title: 'Redux / Redux Toolkit (State Management)', detail: 'react-redux / @reduxjs/toolkit'},
    {title: 'Material UI (UI/UX)', detail: '@mui/material / @mui/material-nextjs / @mui/icons-material'},
    {title: 'Axios (Requests)', detail: 'axios'},
    {title: 'SweetAlert2 (Modals)', detail: 'sweetalert2'},
    {title: 'Mui TipTap (Rich text editor)', detail: 'mui-tiptap / @tiptap/starter-kit'},
    {title: 'Formik (Forms)', detail: 'formik'},
    {title: 'Yup (Validator)', detail: 'yup'},
    {title: 'Cookie (Cookies)', detail: 'cookie / cookies-next'},
    {title: 'Next Auth (Authentication)', detail: 'next-auth'},
    {title: 'Mock User Auth (Store users)', detail: 'mock-user-auth'},
]


export const PUBLIC_ROUTES = [
    {title: 'Home', link: '/'},
    {title: 'Login', link: '/login'},
    {title: 'Registration', link: '/registration'},
    {title: 'Posts', link: '/posts'},
    {title: 'Post detail', link: '/posts/1'},
]

export const PROTECTED_ROUTES = [
    {title: 'Add new post', link: '/posts/new'},
]