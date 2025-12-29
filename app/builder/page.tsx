const handleOptimize = async (index: number, text: string) => {
  setLoadingIndex(index);
  try {
    const res = await fetch("/api/optimize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        text, 
        type: 'POLISH' // 明确告诉后端这是润色请求
      }),
    });
    const data = await res.json();
    if (data.result) {
      updateExperience(index, "description", data.result);
    }
  } catch (err) {
    alert("AI Connection Failed");
  } finally {
    setLoadingIndex(null);
  }
};