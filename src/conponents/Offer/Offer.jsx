import "./Offer.css";

export default function Offer() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Typemaster Keyboard</h1>
          <p className="hero-text">
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </p>
          <div className="order-release-btns">
            <button className="order-btn">PRE-ORDER NOW</button>
            <span className="release">RELEASE ON 5/27</span>
          </div>
        </div>
        <picture id="KeyboardIMG">
          <source
            srcSet="./images/mobile/image-keyboard.jpg"
            media="(max-width:
        768px)"
          />
          <source
            srcSet="./images/tablet/image-keyboard.jpg"
            media="(max-width:
        1024px)"
          />
          <source
            srcSet="./images/desktop/image-keyboard.jpg"
            media="(min-width:
        1025px)"
          />
          <img src="./images/mobile/image-keyboard.jpg" alt="Keyboard-image" />
        </picture>
      </section>
      <section className="keyboard-section">
        <div className="images">
          <div className="image-one">
            <img
              src="./images/mobile/image-phone-and-keyboard.jpg"
              alt="phone-and-keyboard-image"
            />
          </div>
          <div className="image-two">
            <img
              src="./images/mobile/image-glass-and-keyboard.jpg"
              alt="glass-and-keyboard-image"
            />
          </div>
        </div>
        <div className="keyboard-section-content">
          <h2 className="content-head">mechanical wireless Keyboard</h2>
          <p className="content-text">
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </p>
        </div>
      </section>
      <section className="features">
        <div className="features-content">
          <div>
            <img
              src="./images/shared/icon-compatible.svg"
              alt="compitability icon"
            />
          </div>
          <h3>HIGHLY COMPATIBLE</h3>
          <p>
            Easy to use and works well with all major computer brands, gaming
            consoles and mobile devices. Plug & play, no installation or driver
            needed.
          </p>
        </div>
        <div className="features-content">
          <div>
            <img
              src="./images/shared/icon-bluetooth.svg"
              alt="bluetooth icon"
            />
          </div>
          <h3>WIRELESS WITH BLUETOOTH</h3>
          <p>
            Powerful 2.4G RF technology allows you to connect the cordless
            keyboard from up to 30ft away. Simply plug the unifying receiver
            into your computer.
          </p>
        </div>
        <div className="features-content">
          <div>
            <img src="./images/shared/icon-battery.svg" alt="battery icon" />
          </div>
          <h3>HIGH CAPACITY BATTERY</h3>
          <p>
            Equipped with a long-lasting built-in battery, you’ll never have to
            spend a dime on replaceable ones. Enjoy 40 hours of usage time
            between charges.
          </p>
        </div>
        <div className="features-content">
          <div>
            <img src="./images/shared/icon-light.svg" alt="light icon" />
          </div>
          <h3>RGB BACKLIT MODES</h3>
          <p>
            Choose from 4 backlight brightness levels and adjustable breathing
            speed. Each key glows intensely in the dark and helps you type in
            low light conditions.
          </p>
        </div>
      </section>
    </main>
  );
}
