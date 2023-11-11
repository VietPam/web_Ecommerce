import classNames from "classnames/bind";
import styles from "./CustomerSidebar.module.scss";

const cx = classNames.bind(styles);
function CustomerSidebar() {
  return (
    <div className={cx("sidebar-wrapper")}>
      <div className={cx("sidebar-content")}>
        <aside className={cx("sidebar-container")}>
          <div className={cx("account-avatar")}>
            <img
              src="https://salt.tikicdn.com/desktop/img/avatar.png"
              alt="avatar"
            />
            <div className={cx("info")}>
              Tài khoản của
              <strong>Greeny Tiki</strong>
            </div>
          </div>
          <ul className={cx("customer-account-item")}>
            <li>
              <a className={cx("is-active")} href="/customer/account/edit">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
                <span>Thông tin tài khoản</span>
              </a>
            </li>
            <li>
              <a href="/customer/notification">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                </svg>
                <span>Thông báo của tôi</span>
              </a>
            </li>
            <li>
              <a href="/sales/order/history">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
                </svg>
                <span>Quản lý đơn hàng</span>
              </a>
            </li>
            <li>
              <a href="/customer/address">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
                <span>Sổ địa chỉ</span>
              </a>
            </li>
            <li>
              <a href="/review-hub">
                <img
                  className="icon"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/reviewhub.png"
                />
                <span>Đánh giá sản phẩm</span>
              </a>
            </li>
            <li>
              <a href="/danh-rieng-cho-ban">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                </svg>
                <span>Sản phẩm bạn đã xem</span>
              </a>
            </li>
            <li>
              <a href="/customer/wishlist">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span>Sản phẩm yêu thích</span>
              </a>
            </li>
            <li>
              <a href="/customer/review">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                </svg>
                <span>Nhận xét của tôi</span>
              </a>
            </li>
            <li>
              <a href="/customer/help-center?src=sidebar_my_account">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <use
                    xlinkHref="#HEADPHONE_MIC_FILLED_#808089"
                    href="#HEADPHONE_MIC_FILLED_#808089"
                  ></use>
                </svg>
                <span>Hỗ trợ khách hàng</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default CustomerSidebar;
