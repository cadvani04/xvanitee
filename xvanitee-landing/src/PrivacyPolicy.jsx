import React from 'react';

const privacyHtml = `
<style>
  [data-custom-class='body'], [data-custom-class='body'] * {
          background: transparent !important;
        }
[data-custom-class='title'], [data-custom-class='title'] * {
          font-family: Arial !important;
font-size: 26px !important;
color: #000000 !important;
        }
[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
          font-family: Arial !important;
color: #595959 !important;
font-size: 14px !important;
        }
[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
          font-family: Arial !important;
font-size: 19px !important;
color: #000000 !important;
        }
[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
          font-family: Arial !important;
font-size: 17px !important;
color: #000000 !important;
        }
[data-custom-class='body_text'], [data-custom-class='body_text'] * {
          color: #595959 !important;
font-size: 14px !important;
font-family: Arial !important;
        }
[data-custom-class='link'], [data-custom-class='link'] * {
          color: #3030F1 !important;
font-size: 14px !important;
font-family: Arial !important;
word-break: break-word !important;
        }
</style>
      <span style="display: block;margin: 0 auto 3.125rem;width: 11.125rem;height: 2.375rem;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgo8L3N2Zz4K) center no-repeat;"></span>

<article>
  <header>
    <h1>Privacy Policy</h1>
    <p><strong>Last updated July 14, 2025</strong></p>
    <p>This Privacy Notice for xvanitee LLC ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>
    <ul>
      <li>Visit our website at <a href="https://xvanitee-lake.vercel.app">xvanitee-lake.vercel.app</a> or any website of ours that links to this Privacy Notice</li>
      <li>Download and use our mobile application (Open), our Facebook application (connect n8n), or any other application of ours that links to this Privacy Notice</li>
      <li>Engage with us in other related ways, including any sales, marketing, or events</li>
    </ul>
    <p><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:advanicurran@gmail.com">advanicurran@gmail.com</a>.</p>
  </header>

  <!-- Summary -->
  <section id="summary">
    <h2>Summary of Key Points</h2>
    <ul>
      <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us. <a href="#section-1">Learn more</a>.</li>
      <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
      <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
      <li><strong>How do we process your information?</strong> We use it to provide, improve, secure, and administer our Services. <a href="#section-2">Learn more</a>.</li>
      <li><strong>How do we keep your information safe?</strong> We have technical and organizational measures in place. <a href="#section-7">Learn more</a>.</li>
      <li><strong>What are your rights?</strong> You may have rights under your local privacy law. <a href="#section-9">Learn more</a>.</li>
      <li><strong>How do you exercise your rights?</strong> By submitting a data subject access request or contacting us directly.</li>
    </ul>
  </section>

  <!-- Table of Contents -->
  <nav id="table-of-contents">
    <h2>Table of Contents</h2>
    <ol>
      <li><a href="#section-1">What Information Do We Collect?</a></li>
      <li><a href="#section-2">How Do We Process Your Information?</a></li>
      <li><a href="#section-3">When and With Whom Do We Share Your Personal Information?</a></li>
      <li><a href="#section-4">Do We Use Cookies and Other Tracking Technologies?</a></li>
      <li><a href="#section-5">How Do We Handle Your Social Logins?</a></li>
      <li><a href="#section-6">How Long Do We Keep Your Information?</a></li>
      <li><a href="#section-7">How Do We Keep Your Information Safe?</a></li>
      <li><a href="#section-8">Do We Collect Information From Minors?</a></li>
      <li><a href="#section-9">What Are Your Privacy Rights?</a></li>
      <li><a href="#section-10">Controls for Do-Not-Track Features</a></li>
      <li><a href="#section-11">Do United States Residents Have Specific Privacy Rights?</a></li>
      <li><a href="#section-12">Do We Make Updates to This Notice?</a></li>
      <li><a href="#section-13">How Can You Contact Us About This Notice?</a></li>
      <li><a href="#section-14">How Can You Review, Update, or Delete the Data We Collect?</a></li>
    </ol>
  </nav>

  <!-- 1 -->
  <section id="section-1">
    <h2>1. What Information Do We Collect?</h2>
    <h3>Personal information you disclose to us</h3>
    <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
    <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information...</p>
    <p><em>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</em></p>

    <h4>Information collected when you use our Facebook application(s)</h4>
    <p>We by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, check-ins, and likes, and you may choose to grant or deny us access to each individual permission.</p>
  </section>

  <!-- 2 -->
  <section id="section-2">
    <h2>2. How Do We Process Your Information?</h2>
    <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
    <ul>
      <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong></li>
      <li><strong>To deliver and facilitate delivery of services to the user.</strong></li>
      <li><strong>To respond to user inquiries/offer support to users.</strong></li>
      <li><strong>To send administrative information to you.</strong></li>
      <li><strong>To fulfill and manage your orders.</strong></li>
      <li><strong>To enable user-to-user communications.</strong></li>
      <li><strong>To request feedback.</strong></li>
      <li><strong>To send you marketing and promotional communications.</strong></li>
      <li><strong>To deliver targeted advertising to you.</strong></li>
      <li><strong>To post testimonials.</strong></li>
      <li><strong>To protect our Services.</strong></li>
      <li><strong>To administer prize draws and competitions.</strong></li>
      <li><strong>To evaluate and improve our Services, products, marketing, and your experience.</strong></li>
      <li><strong>To identify usage trends.</strong></li>
      <li><strong>To determine the effectiveness of our marketing and promotional campaigns.</strong></li>
      <li><strong>To comply with our legal obligations.</strong></li>
    </ul>
  </section>

  <!-- 3 -->
  <section id="section-3">
    <h2>3. When and With Whom Do We Share Your Personal Information?</h2>
    <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
    <ul>
      <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of our business.</li>
      <li><strong>Other Users.</strong> When you share personal information (e.g., by posting comments) or interact publicly, it may be viewed by all users and publicly outside the Services.</li>
      <li><strong>Offer Wall.</strong> Our application(s) may display a third-party hosted "offer wall" where a unique identifier (your user ID) is shared with the offer wall provider to credit your account.</li>
    </ul>
  </section>

  <!-- 4 -->
  <section id="section-4">
    <h2>4. Do We Use Cookies and Other Tracking Technologies?</h2>
    <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain security, prevent crashes, fix bugs, save preferences, and assist with basic site functions.</p>
    <p>We also permit third parties and service providers to use online tracking technologies for analytics and advertising. To the extent these are deemed a "sale"/"sharing" under US laws, you can opt out as described in section <a href="#section-11">11. Do United States Residents Have Specific Privacy Rights?</a>.</p>
    <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
  </section>

  <!-- 5 -->
  <section id="section-5">
    <h2>5. How Do We Handle Your Social Logins?</h2>
    <p><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
    <p>Our Services allow registration and login via third-party social media (e.g., Facebook, X). We receive profile info (name, email, friends list, profile picture) and any permissions you grant (friends, check-ins, likes). We use this information only as described in this Privacy Notice. We recommend you review your social provider's privacy notice.</p>
  </section>

  <!-- 6 -->
  <section id="section-6">
    <h2>6. How Long Do We Keep Your Information?</h2>
    <p><strong>In Short:</strong> We keep your information as long as necessary to fulfill the purposes outlined in this Notice unless required by law.</p>
    <p>We will only keep personal information as long as necessary for the purposes set out in this Privacy Notice, unless a longer retention period is permitted by law. When there is no ongoing need, we will delete or anonymize your information or securely store it in backup archives until deletion is possible.</p>
  </section>

  <!-- 7 -->
  <section id="section-7">
    <h2>7. How Do We Keep Your Information Safe?</h2>
    <p><strong>In Short:</strong> We aim to protect your personal information through organizational and technical security measures.</p>
    <p>We have implemented appropriate technical and organizational measures to protect your information. However, no electronic transmission or storage can be guaranteed 100% secure. Transmission of information to and from our Services is at your own risk.</p>
  </section>

  <!-- 8 -->
  <section id="section-8">
    <h2>8. Do We Collect Information From Minors?</h2>
    <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18.</p>
    <p>By using the Services, you represent that you are at least 18 or the parent/guardian of a minor. If we learn we collected data from children under 18, we will deactivate the account and promptly delete such data. If you become aware of any data we may have collected from children under age 18, please contact us.</p>
  </section>

  <!-- 9 -->
  <section id="section-9">
    <h2>9. What Are Your Privacy Rights?</h2>
    <p><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your jurisdiction.</p>

    <h3>Withdrawing your consent</h3>
    <p>If we rely on your consent, you have the right to withdraw it at any time by contacting us. This will not affect processing conducted before withdrawal.</p>

    <h3>Opting out of marketing communications</h3>
    <p>You can unsubscribe from marketing emails via the unsubscribe link, reply "STOP" or "UNSUBSCRIBE" to SMS messages, or contact us. We'll remove you from marketing lists but may still send service-related messages.</p>

    <h3>Account Information</h3>
    <ul>
      <li>Log in to your account settings and update your user account.</li>
      <li>Contact us using the information below.</li>
    </ul>
    <p>Upon request to terminate your account, we will deactivate or delete your account from active databases but may retain data for fraud prevention, troubleshooting, investigations, legal compliance, and enforcement.</p>
    <p><strong>Cookies and similar technologies:</strong> Most browsers accept cookies by default. You can remove or reject cookies in your browser settings, which may affect certain features of our Services.</p>
    <p>If you have questions or comments about your privacy rights, email us at <a href="mailto:advanicurran@gmail.com">advanicurran@gmail.com</a>.</p>
  </section>

  <!-- 10 -->
  <section id="section-10">
    <h2>10. Controls for Do-Not-Track Features</h2>
    <p>Most browsers include a Do-Not-Track ("DNT") feature. There is no industry standard for honoring DNT signals, and we do not currently respond to DNT signals. If a standard is adopted, we will update this Notice.</p>
  </section>

  <!-- 11 -->
  <section id="section-11">
    <h2>11. Do United States Residents Have Specific Privacy Rights?</h2>
    <p><strong>In Short:</strong> Residents of certain US states may request access to, correction of, deletion of, or data portability for their personal information, and may withdraw consent. Rights and limits vary by state.</p>

    <h3>Categories of Personal Information We Collect</h3>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Examples</th>
          <th>Collected</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A. Identifiers</td>
          <td>Real name, postal address, email, IP address, account name</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>B. Personal information (Customer Records)</td>
          <td>Name, education, employment history, financial info</td>
          <td>No</td>
        </tr>
        <tr>
          <td>C. Protected classification characteristics</td>
          <td>Gender, age, race, ethnicity, marital status</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>D. Commercial information</td>
          <td>Transaction history, payment details</td>
          <td>No</td>
        </tr>
        <tr>
          <td>E. Biometric information</td>
          <td>Fingerprints, voiceprints</td>
          <td>No</td>
        </tr>
        <tr>
          <td>F. Internet or other similar network activity</td>
          <td>Browsing history, search history, online behavior</td>
          <td>No</td>
        </tr>
        <tr>
          <td>G. Geolocation data</td>
          <td>Device location</td>
          <td>No</td>
        </tr>
        <tr>
          <td>H. Audio, electronic, sensory information</td>
          <td>Images, audio/video recordings</td>
          <td>No</td>
        </tr>
        <tr>
          <td>I. Professional or employment-related information</td>
          <td>Business contact details, work history, qualifications</td>
          <td>No</td>
        </tr>
        <tr>
          <td>J. Education information</td>
          <td>Student records, directory information</td>
          <td>No</td>
        </tr>
        <tr>
          <td>K. Inferences</td>
          <td>Profiles or summaries of preferences and characteristics</td>
          <td>No</td>
        </tr>
        <tr>
          <td>L. Sensitive personal information</td>
          <td></td>
          <td>No</td>
        </tr>
      </tbody>
    </table>

    <h3>Sources &amp; Use</h3>
    <p>We collect this data directly from you and use it for business operations, research, and service delivery. We do not sell your data.</p>

    <h3>Your Rights</h3>
    <ul>
      <li>Right to know whether we are processing your data</li>
      <li>Right to access your personal data</li>
      <li>Right to correct inaccuracies</li>
      <li>Right to request deletion</li>
      <li>Right to obtain a copy of data you shared</li>
      <li>Right to non-discrimination for exercising rights</li>
      <li>Right to opt out of targeted advertising or profiling</li>
    </ul>
    <p>Additional state-specific rights may apply. To exercise your rights, submit a data subject access request or email us at <a href="mailto:advanicurran@gmail.com">advanicurran@gmail.com</a>.</p>
  </section>

  <!-- 12 -->
  <section id="section-12">
    <h2>12. Do We Make Updates to This Notice?</h2>
    <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
    <p>We may update this Privacy Notice from time to time. The "Last updated" date will reflect changes. We encourage you to review this Notice frequently.</p>
  </section>

  <!-- 13 -->
  <section id="section-13">
    <h2>13. How Can You Contact Us About This Notice?</h2>
    <p>If you have questions or comments about this notice, you may contact us by post at:</p>
    <address>
      xvanitee LLC<br/>
      221 Ocean Street<br/>
      Santa Cruz, CA 95060<br/>
      United States
    </address>
    <p>Or by email at <a href="mailto:advanicurran@gmail.com">advanicurran@gmail.com</a>.</p>
  </section>

  <!-- 14 -->
  <section id="section-14">
    <h2>14. How Can You Review, Update, or Delete the Data We Collect from You?</h2>
    <p>Based on applicable laws, you may have the right to request access to, correction of, or deletion of your personal information, and to withdraw consent to processing. These rights may be limited by law.</p>
    <p>To request to review, update, or delete your personal information, please submit a <a href="#data-subject-access-request">data subject access request</a>.</p>
  </section>
</article>
`;

const PrivacyPolicy = () => {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: privacyHtml }}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6'
      }}
    />
  );
};

export default PrivacyPolicy; 