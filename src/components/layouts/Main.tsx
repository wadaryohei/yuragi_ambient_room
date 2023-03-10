import { ReactNode } from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children?: ReactNode;
};

/**
 * <main />コンテンツを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Index;
