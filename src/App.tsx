import { VFC } from 'react';
import Layout from 'component/Layout';
import { FaGithub } from 'react-icons/fa';

const App: VFC = () => (
  <Layout>
    <h1 className="text-lg font-bold pb-2 border-b-2 border-gray-400 border-dashed mb-4 flex justify-between">
      パーセントエンコーダー
      <a href="https://github.com/morimorig3/url-encoder" target="_blank" rel="noreferrer">
        <FaGithub size="1.5em" />
      </a>
    </h1>
  </Layout>
);

export default App;
