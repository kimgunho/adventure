/** @jsxImportSource @emotion/react */

import { wrapper, info, map } from "./style";
const Map = () => {
  return (
    <section css={wrapper}>
      <div css={info}>
        <h2>Location &amp; Number</h2>
        <p>
          서울특별시 마포구 <br />
          동교로23길 40, 4층
        </p>
        <a href="tel:023321237">+82.02.332.1237</a>
      </div>

      <div css={map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8911822285354!2d126.91759661531131!3d37.55762747979945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98dd02a4cbcb%3A0x79f8812008f34d33!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDrj5nqtZDroZwyM-q4uCA0MCA07Li1!5e0!3m2!1sko!2skr!4v1653921930739!5m2!1sko!2skr"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
