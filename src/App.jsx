import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="h-screen w-screen">
      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: 'a4fc3710-21a0-48c0-a0ac-844b617e3275',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=a4fc3710-21a0-48c0-a0ac-844b617e3275&groupId=124f88d3-8d5b-4438-996c-1fb90c106f35&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
          accessToken: process.env.REACT_APP_EMBED_TOKEN,
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}
        cssClassName={"bicontainer"}
      />
    </div>
  );
}

export default App;
