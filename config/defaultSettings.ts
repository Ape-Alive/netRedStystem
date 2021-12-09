import {Settings as LayoutSettings} from '@ant-design/pro-layout';
const settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // 修改右上角的 logo
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // 设置标题的 title
  title: 'Ant Design Pro',
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixSiderbar: true,
};

export default settings;