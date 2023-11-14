import React, { useState } from "react";
import Banner from "../../components/HomePage/Banner/Banner";
import Category from "../../components/HomePage/Category/Category";
import Products from "../../components/HomePage/Products/Products";
import ServicesInfo from "../../components/HomePage/ServicesInfo/ServicesInfo";
import FormSubcribe from "../../components/HomePage/FormSubcribe/FormSubcribe";
import ModalLiveChatContainer from "../../components/LiveChat/LiveChatModal/LiveChatModal";
import styles from "./HomePage.module.css";

function HomePage(props) {
  const [isShowliveChat, setIsShowLiveChat] = useState(false);
  const toggleLiveChat = () => {
    setIsShowLiveChat((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Banner />
      <Category />
      <Products />
      <ServicesInfo />
      <FormSubcribe />
      <button onClick={toggleLiveChat} className={styles.chat}>
        <i className="fa-brands fa-facebook-messenger fa-2xl"></i>
      </button>

      {isShowliveChat && <ModalLiveChatContainer />}
    </div>
  );
}

export default HomePage;
