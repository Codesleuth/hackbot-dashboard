# hackbot-dashboard

_A dashboard for hack events run with Hackbot_

## View the dashboard

The dashboard can be viewed directly from this repository's `gh-pages` at https://codesleuth.github.io/hackbot-dashboard
The code is currently customised for the upcoming [Hack24 2017](http://www.hack24.co.uk/) event but will transition to a general dashboard soon.

## Getting Started

The dashboard is a React app which requires building (bundling) before it is ready to host as static content.

Note: You will need [Node.js](https://nodejs.org) installed.

1. Clone
    ```bash
    git clone https://github.com/Codesleuth/hackbot-dashboard.git
    cd hackbot-dashboard
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Run the webpack dev server
    ```bash
    npm run dev
    ```

4. Browse to the site locally at: [http://localhost:8080](http://localhost:8080)

## Publishing

The site will build to the `build/` directory with the following command:

```bash
npm run build
```

Publish the `build/` directory wherever you like as static content.

_Note_: if using [`nginx`](https://www.nginx.com/), be sure to gzip the bundle and [enable `gzip_static`](http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html) for increased compression.

## Contribute

1. First, fork this repository to your own copy, then follow the steps above ensuring you clone your fork.
2. Make whatever changes you like.
3. Open a Pull Request!

# License

GPL v2 - see the [license file](LICENSE).
