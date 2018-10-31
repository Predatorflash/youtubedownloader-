window.onload = function() {
  function func() {
    console.log("i am here", videourl);
    let data = { type: "downloadclicked" };
    window.postMessage(videourl[0], "*");
  }
  let videourl = window.ytplayer.config.args.url_encoded_fmt_stream_map
    .split(",")
    .map(item => {
      return item.split("&").reduce((pre, cur) => {
        cur = cur.split("=");

        return Object.assign(pre, { [cur[0]]: decodeURIComponent(cur[1]) });
      }, {});
    });

  let menubar = document.getElementById("top-level-buttons");
  let a = document.createElement("a");
  a.className = "yt-simple-endpoint style-scope ytd-button-renderer";
  let buttonad = document.createElement("button");
  buttonad.className = "style-scope yt-icon-button";
  buttonad.innerText = "Download";
  buttonad.setAttribute("role", "button");
  buttonad.setAttribute("id", "buttonnn");
  a.appendChild(buttonad);

  menubar.appendChild(a);

  buttonnn = document.getElementById("buttonnn");

  buttonnn.addEventListener("click", func);
};

{
  /* <a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1">
  <yt-icon-button
    id="button"
    class="style-scope ytd-button-renderer style-default size-default"
  >
    <button id="button" class="style-scope yt-icon-button" aria-label="Share">
      <yt-icon class="style-scope ytd-button-renderer">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block; width: 100%; height: 100%;"
        >
          <g class="style-scope yt-icon">
            <path
              d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"
              class="style-scope yt-icon"
            />
          </g>
        </svg>
      </yt-icon>
    </button>
  </yt-icon-button>
  <yt-formatted-string
    id="text"
    class="style-scope ytd-button-renderer style-default size-default"
  >
    Share
  </yt-formatted-string>
  <paper-tooltip
    role="tooltip"
    tabindex="-1"
    class="style-scope ytd-button-renderer"
    style="left: 154.475px; right: auto; bottom: 40px; top: auto;"
  >
    <div id="tooltip" class="style-scope paper-tooltip hidden">
      Share
    </div>
  </paper-tooltip>
</a>;
{
  /* <ytd-button-renderer
  button-renderer=""
  class="style-scope ytd-menu-renderer force-icon-button style-default size-default"
  is-icon-button=""
>
  <a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1">
    <yt-icon-button
      id="button"
      class="style-scope ytd-button-renderer style-default size-default"
    >
      <button id="button" class="style-scope yt-icon-button" aria-label="Share">
        <yt-icon class="style-scope ytd-button-renderer">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
            style="pointer-events: none; display: block; width: 100%; height: 100%;"
          >
            <g class="style-scope yt-icon">
              <path
                d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"
                class="style-scope yt-icon"
              />
            </g>
          </svg>
        </yt-icon>
      </button>
    </yt-icon-button>
    <yt-formatted-string
      id="text"
      class="style-scope ytd-button-renderer style-default size-default"
    >
      Share
    </yt-formatted-string>
    <paper-tooltip
      role="tooltip"
      tabindex="-1"
      class="style-scope ytd-button-renderer"
      style="left: 158.925px; right: auto; top: 44px; bottom: auto;"
    >
      <div id="tooltip" class="style-scope paper-tooltip hidden">
        Share
      </div>
    </paper-tooltip>
  </a>
</ytd-button-renderer>; */
}
