export type BlogArticle = {
    id: string;
    title: string;
    label: string;
    description: string;
    date: string;
    publishedAt: string;
    readTimeMinutes: number;
    heroImage?: string;
    author: string;
    content: string;
};

const blogData: BlogArticle[] = [
    {
        id: "lyricsray",
        title: "From Dad Instinct to Deployed App: Why I Built LyricsRay",
        label: "Blog",
        description: "How a middle schooler's favorite pop song sparked LyricsRay — a free, AI-powered tool that helps parents make informed decisions about the music their kids are listening to.",
        date: "May 7, 2026",
        publishedAt: "2026-05-07T00:00:00.000Z",
        readTimeMinutes: 3,
        author: "Sebastian Stefaniuk",
        content: `
<p>It all started when my then 12-year-old stepdaughter asked if I knew the song <em>Espresso</em>. I replied with a puzzled "No, but I do drink espresso?" — then curiosity got the better of me and I looked up the lyrics. My reaction was immediate: <em>this can't be appropriate for kids.</em> And yet, kids at her middle school were all raving about it. The real concern came shortly after, when a teacher implied that students in her 6th grade class were mature enough to listen to a song during class, one containing the B word. That was enough for me.</p>

<p>The type of media children are exposed to nowadays is hard to moderate, especially for something as simple and enjoyable as music. As a parent, that tension became the spark behind LyricsRay. I started digging into the research, and what I found from pediatric and behavioral experts was hard to ignore: Music itself isn't the problem, but lyrical content genuinely influences how children think, feel, and develop. We already knew how to look up lyrics and judge them ourselves, but I wanted something simpler with search and analysis in one place. That personal need grew into a bigger idea: A tool for all families, to help parents make informed decisions about what their kids are listening to. Since nothing like it existed the way I envisioned, I built it myself.</p>

<p>LyricsRay is an AI-powered web app that analyzes song lyrics and tells you whether they're appropriate for your child. You search for a song or paste in lyrics, and the app evaluates the content across multiple dimensions, including explicit language, mature themes like violence or substance use, sexual content, and even contextual nuance that goes beyond simple keyword matching. It then produces an age-based recommendation with a plain-language explanation of exactly what it found and why with clear, actionable insight.</p>

<p>Under the hood, LyricsRay is built on Next.js and TypeScript, with the AI components driven by Claude for lyrical analysis. I handled the full stack myself, from designing the analysis prompts to wiring up the infrastructure on AWS using Terraform. It was also an opportunity for me to lean into agentic development workflows with Claude Code, which meaningfully accelerated the build. While I am not sold on using agentic development entirely for my project, it did help with prototyping and debugging, probably hours saved had I not used it. The result is a clean, fast, and free tool for any parent who wants a second opinion on what's coming through their kid's earbuds.</p>

<p>What I'm most proud of isn't the tech but the intention behind it. LyricsRay doesn't try to be the parent. It doesn't tell you what to allow or ban. It gives you the information and steps aside, because you know your child best. Every family has different values, different thresholds, and different conversations they're ready to have. LyricsRay just makes sure you're having them with the full picture in front of you.</p>

<p>LyricsRay is live at <a href="https://www.lyricsray.com" target="_blank" rel="noreferrer">lyricsray.com</a> and completely free to use. If it helps you make even one better call for your kid, that's the whole point. Hosting it is not free, but my plan is to continue improving it with smarter analysis, broader coverage, and more ways to help parents stay one step ahead of the playlist. I did add a link to my Ko-fi page. Coffee is good.</p>
        `.trim(),
    },
];

export default blogData;
