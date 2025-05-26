import { useState } from "react";
import { iconsImgs } from "../../utils/images";
import "./Cards.css";
import bankPrefixes from "../../data/bankPrefixes";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [bankName, setBankName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setInputValue(value);

    if (value.length >= 6) {
      const prefix = value.slice(0, 6);
      setBankName(bankPrefixes[prefix] || "نامشخص");
    } else {
      setBankName("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.length === 16) {
      const masked = "**** **** **** " + inputValue.slice(-4);
      const prefix = inputValue.slice(0, 6);
      const bank = bankPrefixes[prefix] || "نامشخص";

      setCards((prev) => [...prev, { number: masked, bank }]);
      setInputValue("");
      setBankName("");
    }
  };

  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">کارت ها</h3>
        {/* دکمه افزودن حذف شده */}
      </div>

      <div className="grid-c1-content">
        {/* نمایش کارت‌های ثبت‌شده */}
        {cards.map((card, idx) => (
          <div className="card-wrapper" key={idx}>
            <span className="card-pin-hidden">{card.number}</span>
            <span className="text text-sm text-white">{card.bank}</span>
          </div>
        ))}

        {/* اینپوت همیشه نمایش داده می‌شود */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="شماره کارت ۱۶ رقمی را وارد کنید"
          style={{
            width: "100%",
            marginTop: "0.5rem",
            padding: "0.4rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        {bankName && (
          <p className="text text-sm text-silver-v1" style={{ marginTop: "0.25rem" }}>
            بانک: {bankName}
          </p>
        )}
      </div>
    </div>
  );
};

export default Cards;
