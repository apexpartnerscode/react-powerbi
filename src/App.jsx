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
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMjAzYmM4MWItYzI1Zi00Y2QzLWEwOWItNjQ3NmMzMGJiMjg5LyIsImlhdCI6MTY5NzcyMTUxMSwibmJmIjoxNjk3NzIxNTExLCJleHAiOjE2OTc3MjU3OTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUE3eHFaTXhEVzUzZW5SLzE1cEhnMStTZndhbWFjQ1dySTBMbzBzamhORW9lNmV4d2VnaGMwQTFVOUF1OXR3bms1IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImdpdmVuX25hbWUiOiJBcGV4IFBvd2VyIEJJIiwiaXBhZGRyIjoiMTc3LjM5LjIzNi4xIiwibmFtZSI6IkFwZXggUG93ZXIgQkkiLCJvaWQiOiIyMzNlN2ExNi0zZGE0LTRmYzgtOGE4MS0zYzNmZWNlMGNmMzIiLCJwdWlkIjoiMTAwMzIwMDMwNUYyRjJDMyIsInJoIjoiMC5BU1lBRzhnN0lGX0MwMHlnbTJSMnd3dXlpUWtBQUFBQUFBQUF3QUFBQUFBQUFBQW1BRW8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImlua25vd25udHdrIiwia21zaSJdLCJzdWIiOiJtNVY2cXNUdkZQd2dtcnQ5OXc1WE0tRk9jUzF4bFdDSUFyZkU2WG8xQ1ZRIiwidGlkIjoiMjAzYmM4MWItYzI1Zi00Y2QzLWEwOWItNjQ3NmMzMGJiMjg5IiwidW5pcXVlX25hbWUiOiJhcGV4LnBvd2VyYmlAYXB4aW52ZXN0LmNvbSIsInVwbiI6ImFwZXgucG93ZXJiaUBhcHhpbnZlc3QuY29tIiwidXRpIjoiV2FxQ2JhbjRsVW1ZQmI4bG9GR0ZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.hZZX8cUbadXVZvOQBuKqyuHpV4QRxziyyRr7UZA6NFh4d482ENXEiQukAB0GbXHCLL-t7h-vM4SuelXpm7Xt9QJu1mWg_azZAI9j1OIEtv7zqWDM2mdARDXxgyJKExU8j0e-yiRYzDJGo4I16yDW_GdI7KNXvZMczTcutXuOEk6Id7E_IjDJxILhRd6qzu_mtyA4iM2q3x2FwmehS0IVf4Lb1KdWvsswt0G8x4oYXnrlTtySS0E9nnIs5WCEZIK76zPfh-t21ZfypdulKoltBYNgPFZIVnNhXqt4XVuWDtJsbdh_Ve9Ol2cQrF6tNqdMCGkzHlWbcXL37h9PS4rmCw',
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
