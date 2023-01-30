export const renderJumpWeappHtml = (style) => {
  const htmlFontSize = document.documentElement.style.fontSize || '37.5px'
  const { width, height } = style
  return `
    <script type="text/wxtag-template">
      <style>
        html {
          font-size: ${htmlFontSize};
        }
        .ui-jump-report {
          width:  ${width};
          height:  ${height};
        }
      </style> 
      <div class="ui-jump-report">
      </div>
    </script>
  `
}