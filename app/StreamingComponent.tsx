
export default async function StreamingComponent() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
  
    return (
      <div>
        <h2>Streaming Data</h2>
        <p>This content is streamed to the client after a delay.</p>
      </div>
    );
  }
  