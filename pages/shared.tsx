import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Profile from '@/src/components/Profile';
import CardList from '@/src/components/CardList';
import { SAMPLE_USER_URL } from '@/src/constants/urls';

function Shared() {
  return (
    <>
      <Header url={SAMPLE_USER_URL} />
      <Profile />
      <CardList />
      <Footer />
    </>
  );
}
export default Shared;
