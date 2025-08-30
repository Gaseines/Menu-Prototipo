import { useState } from "react";
//Styles
import styles from "./ReservationForm.module.css";

export default function ReservationForm({
  whatsappNumber = "5547999999999", // E.164: país+DDD+número (ex.: +55 47 99999-9999 -> 5547999999999)
  restaurantName = "Seu Restaurante",
}) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const formatDateBR = (isoDate) => {
    // isoDate vem do <input type="date"> como "YYYY-MM-DD"
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Informe seu nome.";
    if (!form.date) e.date = "Escolha a data.";
    if (!form.email.trim()) e.email = "Informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "E-mail inválido.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const dataBR = formatDateBR(form.date);
    const msg = [
      `Olá, gostaria de fazer uma *reserva*!`,
      ``,
      `*Nome:* ${form.name}`,
      `*Data:* ${dataBR}`,
      `*E-mail:* ${form.email}`,
      ``,
      `Restaurante: ${restaurantName}.`,
      ``,
      `Vocês teriam disponibilidade nesta data?`,
    ].join("\n");

    const encoded = encodeURIComponent(msg);

    // Se tiver número: conversa direta. Se não, cai no "compartilhar" com texto pronto.
    const url = whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`;

    // Abre em nova aba/janela
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`card ${styles.formulario}`}
      style={{ display: "grid", gap: 12, maxWidth: 520 }}
    >
      <div className={styles.campo}>
        <label className={styles.label} htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          required
          placeholder="Seu nome completo"
          className="card"
          style={{
            width: "100%",
            padding: 12,
            border: "1px solid #2a2a32",
            borderRadius: 12,
            background: "#161618",
            color: "#fff",
          }}
        />
        {errors.name && (
          <small style={{ color: "#f87171" }}>{errors.name}</small>
        )}
      </div>

      <div className={styles.campo}>
        <label className={styles.label} htmlFor="date">
          Data da reserva
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
          className="card"
          style={{
            width: "100%",
            padding: 12,
            border: "1px solid #2a2a32",
            borderRadius: 12,
            background: "#161618",
            color: "#fff",
          }}
        />
        {errors.date && (
          <small style={{ color: "#f87171" }}>{errors.date}</small>
        )}
      </div>

      <div className={styles.campo}>
        <label className={styles.label} htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
          placeholder="seuemail@exemplo.com"
          className="card"
          style={{
            width: "100%",
            padding: 12,
            border: "1px solid #2a2a32",
            borderRadius: 12,
            background: "#161618",
            color: "#fff",
          }}
        />
        {errors.email && (
          <small style={{ color: "#f87171" }}>{errors.email}</small>
        )}
      </div>

      <button
        type="submit"
        className={`tab active ${styles.btn_wts}`}
        style={{ padding: "12px 16px", fontWeight: 700, cursor: "pointer", marginTop: "20px"}}
      >
        Confirmar no WhatsApp
      </button>

      <small
        style={{
          color: "var(--muted)",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Ao enviar, você será redirecionado para o WhatsApp com a mensagem
        pronta.
      </small>
    </form>
  );
}
