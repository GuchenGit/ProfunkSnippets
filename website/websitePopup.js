document.addEventListener("DOMContentLoaded", (event) => {
    createSmallPopup();
});

function createSmallPopup() {
    const wrapper = document.createElement("div");
    wrapper.id = "popupWrapper";

    const popupContainer = document.createElement("div");
    popupContainer.id = "popupContainer"; // Assign the id

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&#10005;"; // Unicode for a cross symbol
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.cursor = "pointer";
    closeButton.style.color = "#fff";
    closeButton.style.fontSize = "20px"; // Decrease font size
    closeButton.style.width = "30px"; // Set fixed width
    closeButton.style.height = "30px"; // Set fixed height
    closeButton.style.lineHeight = "30px"; // Vertically center the cross symbol
    closeButton.style.textAlign = "center"; // Horizontally center the cross symbol
    closeButton.style.padding = "0"; // Remove padding
    closeButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Add a semi-transparent background
    closeButton.style.borderRadius = "50%"; // Make it round
    closeButton.addEventListener("click", () => {
        popupContainer.style.opacity = "0";
    });

    const popupContent = document.createElement("p");
    popupContent.innerHTML =
        'Wir suchen Unterstützung für unser Team, bewerben Sie sich noch heute!<br/><br/><span style="display: block; margin-bottom: 1em;"></span>Schauen Sie bei unseren <a style="color: #fff; cursor: pointer; font-weight: bold; font-size: 1.2em; text-decoration: underline;" href="https://profunk.eu/de/unternehmen/karriere.php">Stellenangeboten</a> vorbei.';

    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
    popupContainer.style.position = "fixed";
    popupContainer.style.bottom = "10vh";
    popupContainer.style.right = "5%";
    popupContainer.style.width = "90%";
    popupContainer.style.maxWidth = "500px";

    wrapper.appendChild(popupContainer);
    wrapper.style.zIndex = "99999"; // Increase z-index to keep it on top of other elements
    document.body.appendChild(wrapper);

    // Add media query for mobile devices
    const style = document.createElement("style");
    style.innerHTML = `
    @media (max-width: 768px) {
      #popupWrapper {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      #popupContainer {
        right: auto !important;
        left: auto !important;
        width: 80% !important;
        max-width: none !important;
        bottom: 5vh !important;
        padding: 1rem !important;
      }
    }
    @media (min-width: 769px) {
      #popupWrapper {
        display: block;
      }
      #popupContainer {
        right: 5% !important;
        width: 90% !important;
        max-width: 500px !important;
        bottom: 10vh !important;
      }
    }
  `;
    document.head.appendChild(style);

    popupContainer.style.backgroundColor = "#06468d";
    popupContainer.style.color = "#fff";
    popupContainer.style.padding = "2rem";
    popupContainer.style.zIndex = "9999";
    popupContainer.style.borderRadius = "10px";
    popupContainer.style.opacity = "0";
    popupContainer.style.transition = "opacity 0.3s";
    popupContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    popupContainer.style.transform = "scale(0.8)";
    popupContainer.style.transition = "transform 0.5s, opacity 0.5s";

    setTimeout(() => {
        popupContainer.style.opacity = "1";
        popupContainer.style.transform = "scale(1)";
    }, 100);

    // Automatically close the popup after 5 seconds
    setTimeout(() => {
        popupContainer.style.opacity = "0";
    }, 30000);
}
