<template>
  <div class="footer">
    <div class="footer__github">
      <h3>Our GitHub</h3>
      <a
        class="github__link"
        href="https://github.com/kirilla111/kursovaya-2-kurs---2-cem-"
        ><img
          width="40"
          src="https://im0-tub-ru.yandex.net/i?id=930b1afc15cb83b7c3adea678c26fd05&n=13"
          alt="gitHub"
      /></a>
    </div>
    <div class="footer__socials">
      <h3 class="socials_title">Follow Us</h3>
      <div class="socials__links">
        <a href="https://vk.com/kirillafanasyev2014"
          ><img
            src="https://i7.uihere.com/icons/937/662/563/vk-circle-b3b8e648ea48ccf33a08f9a17442a26e.png"
            width="40"
            alt="VK"
        /></a>
        <a href="https://vk.com/kirillafanasyev2014"
          ><img
            src="https://www.vippng.com/png/detail/28-283916_png-file-download-icon-twitter-png.png"
            width="40"
            alt="Twitter"
        /></a>
        <a href="https://vk.com/kirillafanasyev2014"
          ><img
            src="https://im0-tub-ru.yandex.net/i?id=51efd974e716fc5b9677e74bf02dedce&n=13"
            width="40"
            alt="Instagram"
        /></a>
        <a href="https://vk.com/kirillafanasyev2014"
          ><img
            src="https://www.rjselectronics.com/wp-content/uploads/facebook-1-768x768.png"
            width="40"
            alt="FaceBook"
        /></a>
      </div>
    </div>
    <div class="footer__copyright">
      <p>
        © 2021–2021 ООО    <br /> 
        «Afanasyev.Kirill» <br />
        Plagiarism Today <br />
        All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-footer",
};
</script>

<style scoped>
.footer {
  /* position:sticky; */
  border-top: 1px solid var(--hover-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
}

.socials__links {
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
}
@media (max-width: 750px) {
  .footer {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    align-items: center;
    row-gap: 30px;
    justify-content: center;
  }
}
</style>