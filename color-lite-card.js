// COLOR LITE CARD

// Simple custom card for displaying lights on a picture elements floor plan


class ColorLite extends HTMLElement {
  set hass(hass) {
    const entityId = this.config.entity;
    const state = hass.states[entityId];

    if (!this.content) {
      const card = document.createElement('ha-card');
      card.style.background = 'none'; card.style.border = 'none'; card.style.boxShadow = 'none';
      this.content = document.createElement('div');
      this.content.style.width = '100%'; this.content.style.height = '100%';
      this.img = document.createElement('img');
      this.img.style.width = '100%'; this.img.style.height = '100%';
      this.img.style.display = 'block'; this.img.style.pointerEvents = 'none';
      this.img.style.transition = 'opacity 0.7s ease-in-out, filter 0.7s ease-in-out';
      
      this.content.appendChild(this.img);
      card.appendChild(this.content);
      this.appendChild(card);
      
      this._prevState = {};
      this._lastColor = { hs: [0, 0], rgb: [255, 255, 255] };
    }

    if (state) {
      if (state.state === 'on' && state.attributes.hs_color) {
        this._lastColor.hs = state.attributes.hs_color;
        this._lastColor.rgb = state.attributes.rgb_color || [255, 255, 255];
      }

      const hs = this._lastColor.hs;
      const rgb = this._lastColor.rgb;
      const bright = state.attributes.brightness || 0;
      
      const targetOpacity = (state.state === 'on') ? (bright / 255) * 0.7 : 0;
      const isColor = (hs[1] > 5);
      const targetURL = this.config.image;
      

      let filterStr = "";
      if (isColor) {
        filterStr = `sepia(1) saturate(300%) hue-rotate(${hs[0] - 50}deg)`;
      } else {
        filterStr = `brightness(1.2) saturate(0%)`;
      }
      
      filterStr += ` drop-shadow(0 0 5px rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.2))`;

      if (this._prevState.src !== targetURL) {
        this.img.src = targetURL;
        this._prevState.src = targetURL;
      }
      
      if (this._prevState.filter !== filterStr) {
        this.img.style.filter = filterStr;
        this._prevState.filter = filterStr;
      }

      if (this._prevState.opacity !== targetOpacity) {
        this.img.style.opacity = targetOpacity;
        this._prevState.opacity = targetOpacity;
      }
    }
  }

  setConfig(config) { this.config = config; }
  getCardSize() { return 3; }
}
customElements.define('color-lite-card', ColorLite);
