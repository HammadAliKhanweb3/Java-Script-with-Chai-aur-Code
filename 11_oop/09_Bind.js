<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <button>Button Clicked</button>
  </body>

  <script>
    // bind keyword is used here to losing "this"
    class React {
      constructor() {
        this.library = "React";
        this.server = "https://localhost:3000";

        document
          .querySelector("button")
          .addEventListener("click", this.handleClick.bind(this));
      }

      handleClick() {
        console.log("button Clicked");
        console.log(this.server);
      }
    }
    let app = new React();
  </script>
</html>
