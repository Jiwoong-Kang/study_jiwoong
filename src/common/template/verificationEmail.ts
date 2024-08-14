export const signupEmail = (randomNo) => `
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Jiwoong World 회원가입 인증</title>
      <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            font-size: 24px;
            text-align: center;
            color: #007bff;
        }
        .content {
            margin-top: 20px;
        }
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
            color: #aaa;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
    </head>
    <body>
      <div class="container">
          <div class="header">Jiwoong World 회원가입 인증</div>
          <div class="content">
              <p>안녕하세요,</p>
              <p>Jiwoong World 에 가입해 주셔서 감사합니다. 아래의 인증 번호를 회원가입 페이지에 입력하여 회원가입 절차를 완료해 주세요.</p>
              <h1><strong> 인증 번호: ${randomNo} </strong></h1>
              <p>이 번호는 귀하의 이메일 주소를 인증하는 데 사용됩니다.</p>

              <p>만약 인증 번호를 요청하지 않았다면, 이 메일을 무시해 주세요.</p>
          </div>
          <div class="footer">
              <p>Jiwoong World 팀 드림</p>
              <p>궁금하신 사항이 있으시면 언제든지 저희 고객지원 센터로 문의해 주세요.</p>
          </div>
      </div>
    </body>
  </html>

`;
