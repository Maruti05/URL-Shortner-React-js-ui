import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./componets/NavBar";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const BACKEND_URL = "http://localhost:8080/api/v1";
export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState({ iserror: false, msg: "" });
  const [isCopy, setIsCopy] = useState(false);

  const getAlert = () => {
    Swal.fire({
      title: "Invalid URL !",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Ok",
      onClose: setError({ iserror: false, msg: "" }),
    });
  };

  const shortURL = async (event) => {
    event.preventDefault();
    if (!validateUrl(url)) {
      setError({ iserror: true, msg: "Enter the valid Url" });
      //alert(error.msg);
      return;
    }
    const response = await axios.post(`${BACKEND_URL}/generate`, {
      url: url,
    });
    console.log(response);
    if (response.status == 200) {
      setUrl(`${BACKEND_URL}/${response.data.shortLink}`);
      setIsCopy(true);
      return;
    }
  };
  const validateUrl = (str) => {
    try {
      return Boolean(new URL(str));
    } catch (e) {
      return false;
    }
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <div>
      <main className={styles.main}>
        <NavBar></NavBar>
        <div className={styles.formContainer}>
          <div style={{ color: "white" }}>
            <h3>Paste the URL to be shortened</h3>
          </div>
          <form
            className={styles.form}
            onSubmit={shortURL}
            onReset={() => setUrl("")}
          >
            <div className={styles.searchContainer}>
              <input
                type="search"
                placeholder="Enter the long URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isCopy}
              />
              {isCopy ? (
                <button type="button" onClick={copyToClipBoard}>
                  Copy
                </button>
              ) : (
                <button type="submit" disabled={url === "" || url == null}>
                  Shorten
                </button>
              )}
            </div>
            <button type="reset" className={styles.reset}>Reset</button>
          </form>
        </div>
        {error.iserror && getAlert()}
      </main>
    </div>
  );
}
