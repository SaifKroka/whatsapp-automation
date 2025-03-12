# WhatsApp Automation Tool

A simple Node.js tool to automate WhatsApp messaging without the need to save numbers in your contacts. This project uses a minimal front-end (HTML, CSS, and JavaScript) and a back-end powered by Express and [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).

## Features

- **Send WhatsApp messages** without adding numbers to your contacts.
- **Validates** if the recipient number is registered on WhatsApp.
- **Simple UI:** Enter your WhatsApp number, the recipient's number, and your message.
- **QR Code Authentication:** Scan the QR code to log in to your WhatsApp account.

## Prerequisites

- **Node.js** (v14 or above recommended; tested with v18.16.1)
- **npm** (comes with Node.js)
- A stable **internet connection**
- A valid **WhatsApp account** (you will need to scan a QR code to authenticate)

## Installation

1. **Clone or download** this repository to your local machine.

2. Open your terminal, navigate to the project folder, and install the required libraries:

   ```bash
   npm install express whatsapp-web.js qrcode-terminal
