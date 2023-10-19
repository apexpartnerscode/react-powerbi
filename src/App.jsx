import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = "https://apps.powerapps.com/play/e/default-203bc81b-c25f-4cd3-a09b-6476c30bb289/a/083fbc08-0af7-4aaa-b917-e7bbbb66571d?tenantId=203bc81b-c25f-4cd3-a09b-6476c30bb289&hint=077b610a-1471-4cde-8441-22c947fbec81&sourcetime=1697736325808";
  }, [])
  
  setTimeout(() => {
    window.location.href = "https://apps.powerapps.com/play/e/default-203bc81b-c25f-4cd3-a09b-6476c30bb289/a/083fbc08-0af7-4aaa-b917-e7bbbb66571d?tenantId=203bc81b-c25f-4cd3-a09b-6476c30bb289&hint=077b610a-1471-4cde-8441-22c947fbec81&sourcetime=1697736325808";
  }, 5 * 60 * 1000);
  return (
    <div className="h-screen w-screen">
      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: '0451e003-388b-41b8-a83e-d8d6a8f32d62',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=0451e003-388b-41b8-a83e-d8d6a8f32d62&groupId=c6e10a79-f6ed-4665-a30b-31bfcd6c9029&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
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
