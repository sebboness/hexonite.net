import { KO_FI_LINK } from "./constants";

export type ArticleContentBlock =
    | { type: "text"; html: string }
    | { type: "banner"; image: string; alt?: string; caption?: string };

export type BlogArticle = {
    id: string;
    title: string;
    shortTitle: string;
    label: string;
    description: string;
    date: string;
    publishedAt: string;
    readTimeMinutes: number;
    heroImage?: string;
    author: string;
    content: ArticleContentBlock[];
};

const blogData: BlogArticle[] = [
    {
        id: "srf-school",
        title: "Serving in Code: Building a Sunday School app for SRF",
        shortTitle: "srfschool.org",
        heroImage: "/img/blog/srfschool-hero.jpg",
        label: "Blog",
        description: "How registering my daughter for Sunday School, then volunteering as a teacher assistant, led me to build a full registration, attendance, and scheduling app for the SRF Sunday School community, one designed to grow beyond a single temple.",
        date: "August 15, 2026",
        publishedAt: "2026-08-15T00:00:00.000Z",
        readTimeMinutes: 5,
        author: "Sebastian Stefaniuk",
        content: [
            {
                type: "text",
                html: `
<p>It started with a Google Form. When we signed our daughter up for Sunday School at our local Self-Realization Fellowship temple, I remember filling it out and thinking, this works, but it could be so much better. Nothing was broken. It got the job done. But as someone who builds software for a living, I noticed the gaps right away: no real student management, no easy way to keep our family's information updated over time, nothing that felt built for a program meant to keep growing. It stuck with me, but initially I didn't do anything about it.</p>

<p>Months later, completely unrelated to any of that, I was standing around after Sunday Services at our Encinitas Temple when someone asked if I'd be willing to help out as a teacher assistant for the younger kids. I had no prior experience and I was surprised by the question. But I said yes immediately, and a couple of months later I was actually there, on Sunday mornings, in the classroom, filled with joy that I was doing something meaningful.</p>

<p>Being in that room several Sundays a month gave me a different view of the Sunday School. At some point I mentioned to the community that I also worked in IT and software engineering, in case it was ever useful. Not long after, I was asked if I'd like to help build a simple attendance app. Again I said yes immediately, and that Google Form came right back to mind. But I didn't want to solve just one piece of it, so I offered to build the whole thing: registration, attendance, and everything in between.</p>

<p>Once I started looking closer, I found more gaps. Teacher sign ups were informal and easy to lose track of. Weekly class schedules lived in a spreadsheet. There was no real system for managing students and families as the program grew year over year. Each of those became its own piece of the app: a self-serve registration wizard for families, a proper invitation and onboarding flow for teachers, weekly schedule management with conflict checks so nobody gets double booked, and attendance tracking built around how classes actually run week to week.</p>

<p>For the technically curious: SRF School is a Next.js and TypeScript frontend with a Node.js Lambda API on AWS API Gateway, with DynamoDB for storage and Cognito handling authentication, including Google sign in with account linking for teachers who'd rather use that. Parents go through a multi-step registration wizard that supports multiple children per family, various consent selections, and an optional account sign up so that parents can manage their children's registration afterward. Additionally, teachers get invited by admins, can self-assign to open classes for a week, and can subscribe to a dynamic calendar feed so their weekly assignments show up right in Google Calendar, Apple Calendar, or Outlook alongside whoever else is teaching that week. Everything runs on infrastructure managed with Terraform, and the whole system is built with automated tests to keep it reliable as it grows.</p>
                `.trim(),
            },
            {
                type: "banner",
                image: "/img/blog/srfschool-supporting1.jpg",
                alt: "SRF School app",
            },
            {
                type: "text",
                html: `
<p>One decision mattered to me from the start: this shouldn't be built as a one-off for a single SRF temple. Every part of the data model, locations, classes, schedules, is designed so the same app can serve other SRF Sunday Schools, not just the one in Encinitas. If another temple wants to run their own registration and class management the same way, the app is already built to support that.</p>

<p>All of this happened on my own time, weekends mostly, along with some weeknights after work, because I wanted to contribute something lasting to a community that has given our family more than we could have asked for. I'm genuinely grateful for the opportunity, both to volunteer in the classroom with kids I've come to know, and to put my skills to use for something outside of a resume. Getting asked to help with attendance and ending up building an entire school app is not what I expected going into that Sunday morning, but I'm glad it turned out that way.</p>
                `.trim(),
            },
        ],
    },
    {
        id: "lyricsray",
        title: "From dad instinct to deployed app: Why I built LyricsRay",
        shortTitle: "lyricsray.com",
        heroImage: "/img/blog/lyricsray-hero.jpg",
        label: "Blog",
        description: "How a middle schooler's favorite pop song sparked LyricsRay — a free, AI-powered tool that helps parents make informed decisions about the music their kids are listening to.",
        date: "May 7, 2026",
        publishedAt: "2026-05-07T00:00:00.000Z",
        readTimeMinutes: 3,
        author: "Sebastian Stefaniuk",
        content: [
            {
                type: "text",
                html: `
<p>It all started when my then 12-year-old stepdaughter asked if I knew the song <em>Espresso</em>. I replied with a puzzled "No, but I do drink espresso?" — then curiosity got the better of me and I looked up the lyrics. My reaction was immediate: <em>this can't be appropriate for kids.</em> And yet, kids at her middle school were all raving about it. The real concern came shortly after, when a teacher implied that students in her 6th grade class were mature enough to listen to a song during class, one containing the B word. That was enough for me.</p>

<p>The type of media children are exposed to nowadays is hard to moderate, especially for something as simple and enjoyable as music. As a parent, that tension became the spark behind LyricsRay. I started digging into the research, and what I found from pediatric and behavioral experts was hard to ignore: Music itself isn't the problem, but lyrical content genuinely influences how children think, feel, and develop. We already knew how to look up lyrics and judge them ourselves, but I wanted something simpler with search and analysis in one place. That personal need grew into a bigger idea: A tool for all families, to help parents make informed decisions about what their kids are listening to. Since nothing like it existed the way I envisioned, I built it myself.</p>

<p>LyricsRay is an AI-powered web app that analyzes song lyrics and tells you whether they're appropriate for your child. You search for a song or paste in lyrics, and the app evaluates the content across multiple dimensions, including explicit language, mature themes like violence or substance use, sexual content, and even contextual nuance that goes beyond simple keyword matching. It then produces an age-based recommendation with a plain-language explanation of exactly what it found and why with clear, actionable insight.</p>

<p>Under the hood, LyricsRay is built on Next.js and TypeScript, with the AI components driven by Claude for lyrical analysis. I handled the full stack myself, from designing the analysis prompts to wiring up the infrastructure on AWS using Terraform. It was also an opportunity for me to lean into agentic development workflows with Claude Code, which meaningfully accelerated the build. While I am not sold on using agentic development entirely for my project, it did help with prototyping and debugging, probably hours saved had I not used it. The result is a clean, fast, and free tool for any parent who wants a second opinion on what's coming through their kid's earbuds.</p>

<p>What I'm most proud of isn't the tech but the intention behind it. LyricsRay doesn't try to be the parent. It doesn't tell you what to allow or ban. It gives you the information and steps aside, because you know your child best. Every family has different values, different thresholds, and different conversations they're ready to have. LyricsRay just makes sure you're having them with the full picture in front of you.</p>

<p>LyricsRay is live at <a href="https://www.lyricsray.com" target="_blank">lyricsray.com</a> and completely free to use. If it helps you make even one better call for your kid, that's the whole point. Hosting it is not free, but my plan is to continue improving it with smarter analysis, broader coverage, and more ways to help parents stay one step ahead of the playlist. I did add a link to my <a href="${KO_FI_LINK}" target="_blank">Ko-fi</a> page. Coffee is good.</p>
                `.trim(),
            },
        ],
    },
];

export default blogData;
