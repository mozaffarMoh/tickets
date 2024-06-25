import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import VCard from "vcard-creator";
import "./VCF.scss";

const VCF = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [downloadLink, setDownloadLink]: any = useState(null);

  // Function to trigger download
  const downloadVCard = () => {
    const myVCard: any = new VCard();

    myVCard
      .addName(firstName + " " + lastName)
      .addCompany("Samsung")
      .addJobtitle("Web Developer")
      .addRole("Data Protection Officer")
      .addEmail("info@jeroendesloovere.be")
      .addPhoneNumber("0947455733", "PREF;WORK")
      .addPhoneNumber("0951457986", "WORK")
      .addAddress(
        null,
        null,
        "street",
        "worktown",
        null,
        "workpostcode",
        "Belgium"
      )
      .addSocial("https://twitter.com/desloovere_j", "Twitter", "desloovere_j")
      .addURL("http://www.jeroendesloovere.be");

    const blob = new Blob([myVCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
  };

  return (
    <div className="vcf flexCenterColumn">
      <h1>Test VCF</h1>
      <TextField
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <Button
        variant="contained"
        className="flexCenterColumn"
        onClick={downloadVCard}
        href={downloadLink}
        download={"contact.vcf"}
      >
        Download vCard
        <BsDownload />
      </Button>
    </div>
  );
};

export default VCF;
