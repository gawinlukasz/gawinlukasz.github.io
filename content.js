/* ============================================================
   EDYTUJ TYLKO TEN PLIK.
   Po zmianie odśwież stronę. Zdjęcia wrzuć do folderu images/
   i wpisz nazwę pliku w outside.photos (np. "gym.jpg").
   ============================================================ */

const SITE = {
  name: "Łukasz Gawin",
  role: "System & Data Analyst",
  location: "Tricity, Poland",
  email: "lukasz.j.gawin@gmail.com", 
  linkedin: "https://www.linkedin.com/in/lukaszgawin/",
  github: "",
  availability: "Open to analyst and data roles from March 2027.\n Happy to talk earlier.",

  heroLead:
    "Twenty+ years of getting a number out of a live systems that other people have to trust.",

  about: [
    "For 20+ years I grew up with Jeppesen and Boeing in Poland. I was part of the first aviation unit in Gdańsk in 2007 (AvDocs). After that I supported production systems - production support, then system analyst.",
    "When leadership had a question, I went into the databases and came back with an answer, a direction, or a recommendation. A slide was the last resort. A lot of the job was unglamorous, and I liked that part. Check why a number looks wrong. Write the report, automate it, build a small Python app so the business does not wait for a dedicated developer.",
    "When they needed live numbers and KPIs, I pulled Jira into a Jupyter notebook and showed the charts - matplotlib and seaborn, not a slide deck.",
    "I am ready for the next step: complex SQL, pandas, Power BI, Databricks. I will not pretend I have years of a lakehouse. I do have years of production data, and I am building the new stack around that habit. I use AI tools daily at work — to draft SQL and Python, check edge cases, and shorten the path from a business question to a number or a script I have already verified."
  ],

  facts: [
    { k: "20+", v: "years experience on operational data" },
    { k: "Data Analysis", v: "SQL, Python, Power BI, ETL" },
    { k: "EN / PL", v: "working languages" },
    { k: "Tricity", v: "remotely | hybrid | on site" }
  ],

  experience: [
    {
      years: "2021 — 2027",
      title: "Senior System & Data Analyst",
      org: "Jeppesen, Boeing, ForeFlight",
      place: "Gdańsk · hybrid",
      points: [
        "Analysis and maintenance of production relational databases, AMDB and AMM (airport data), on Oracle, including two replicated instances.",
        "Identifying and resolving data discrepancies across multiple sources prior to delivering results to business stakeholders.",
        "Preparing complex SQL analyses to address specific operational queries, including error margins, record counts, and process impacts.",
        "Validating results and verifying data quality, including post-deployment test scenarios.",
        "Developing recurring metrics and reports. Automating reporting workflows using Python (pandas). ",
        "Conducting analyses and visualizations in Jupyter (matplotlib, seaborn), followed by developing reports and dashboards in Power BI and Tableau.",
      ]
    }     
  ],

  stack: [
    { name: "Oracle / SQL", note: "production support on Oracle DB's, including PL/SQL-shaped work and replicated databases", level: "senior" },
    { name: "PostgreSQL / MySQL", note: "worked on PostgreSQL, built MySQL databases for applications, not only queries.", level: "mid" },
    { name: "Python (pandas,numpy)", note: "reporting app, data cleansing, manipulation and wrangling", level: "mid" },
    { name: "Jupyter (matplotlib,seaborn)", note: "analysis, trends and charts, not just experiments", level: "mid" },
    { name: "Power BI / Tableau", note: "moving notebook charts to a tool business already opens", level: "mid" },
    { name: "Atlassian Suite (Jira,Confluence) / ServiceNow", note: "queue, workflow, numbers behind the tickets", level: "senior" },
    { name: "VSCode / Git", note: "enough to work in a team, not a release engineer", level: "senior" },
    { name: "HTML / CSS / PHP", note: "built sites wired to SQL databases, not only static pages", level: "mid" },
    { name: "MS Visio / BPMN", note: "how a system actually worked, then process optimization. Diagrams and requirements people could build from.", level: "mid" },
    { name: "ArcGIS", note: "Years of fixing prd broken .gdb files, hunted bad geometries and data that did not match the map.", level: "senior" },
    { name: "Generative AI", note: "daily at work — draft SQL and Python, check edge cases, then verify the number myself", level: "mid" },
    { name: "FME", note: "Using advanced transformers for filtering, aggregation, and joining especially in GIS data", level: "junior" },
    { name: "Databricks / Delta", note: "learning — lakehouse, not years of production yet", level: "junior" },
    { name: "Fortra Automate", note: "10+ years building production extracts scripts. Still know it. Moved that work to Python.", level: "senior" },     
  ],

  skills: [
    "Ad-hoc analysis on a live relational databases",
    "Data quality checks, including replication that has drifted",
    "Turning a business question into a query and a report",
    "Developing automations everywhere before adding another manual step",
    "Requirements that development can actually build",
    "Documentation and handover someone else can run",
    "Working with developers, operations and business owners",
    "Generative AI (ChatGPT, Claude, Prompt Engineering)",
    "English in an international team",
    "German - A1/A2"
  ],

  certs: [
    "SAFe Practitioner",
    "Scrum Master",
    "Practitioner Certificate in Business Analysis Practice",
    "Engineering degree — Gdańsk University of Technology, Management & Economics / IT"
  ],

  outside: {
    text: "Husband and dad of four daughters. After hard work – time to hit the gym and grab some healthy food. Long weekend? Let's hike in the mountains. I am better at a long session than at a highlight reel.",
    photos: [
      { file: "me.jpg", caption: "Hello :)" },
      { file: "mountains.jpg", caption: "Mountains" },
      { file: "sing.jpg", caption: "OMG..." },
      { file: "gym.jpg", caption: "Gym!" },
      { file: "wife.jpg", caption: "and wife" }
    ]
  },

  learnIntro:
    "If you are starting in data, you do not need a paid bootcamp first. These are the free places I would send a colleague. Do the exercises. A finished notebook beats a certificate.",

  learn: [
    {
      topic: "SQL",
      why: "This is the job. Everything else is optional until you can answer a question from a table.",
      links: [
        { name: "SQLBolt", url: "https://sqlbolt.com/", note: "short lessons, do them in order" },
        { name: "Mode SQL tutorial", url: "https://mode.com/sql-tutorial/", note: "closer to analyst work" },
        { name: "PostgreSQL exercises", url: "https://pgexercises.com/", note: "harder cases, windows, dates" },
        { name: "Select Star SQL", url: "https://selectstarsql.com/", note: "one story, real queries" }
      ]
    },
    {
      topic: "Python",
      why: "Enough to open a file, clean a column and not be afraid of an error.",
      links: [
        { name: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/", note: "free book, practical" },
        { name: "Python for Everybody", url: "https://www.py4e.com/", note: "gentle, with videos" },
        { name: "Kaggle Python", url: "https://www.kaggle.com/learn/python", note: "short, in the browser" }
      ]
    },
    {
      topic: "pandas & notebooks",
      why: "This is how you turn a CSV or a query into something a person can look at.",
      links: [
        { name: "Kaggle pandas", url: "https://www.kaggle.com/learn/pandas", note: "enough to start" },
        { name: "pandas docs — 10 minutes", url: "https://pandas.pydata.org/docs/user_guide/10min.html", note: "keep this open" },
        { name: "Jupyter", url: "https://jupyter.org/try", note: "notebook in the browser" }
      ]
    },
    {
      topic: "Charts",
      why: "A chart is an argument. If the number is wrong, a pretty chart makes it worse.",
      links: [
        { name: "Plotly Python", url: "https://plotly.com/python/", note: "what I used on Jira stats" },
        { name: "matplotlib tutorials", url: "https://matplotlib.org/stable/tutorials/index.html", note: "uglier, more control" }
      ]
    },
    {
      topic: "Power BI",
      why: "Business already has this open. Learn it after SQL, not instead of SQL.",
      links: [
        { name: "Microsoft Learn — Power BI", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi", note: "official, free" }
      ]
    },
    {
      topic: "Databricks",
      why: "Only after SQL feels boring. Lakehouse is a place to put tables, not a personality.",
      links: [
        { name: "Databricks Free Edition", url: "https://www.databricks.com/learn/free-edition", note: "real workspace, no card needed to start" },
        { name: "Lakehouse fundamentals", url: "https://www.databricks.com/resources/learn/training/lakehouse-fundamentals", note: "Bronze, Silver, Gold in one sitting" }
      ]
    },
    {
      topic: "Git",
      why: "So your notebook is not named final_v7_REAL.ipynb.",
      links: [
        { name: "Git handbook", url: "https://docs.github.com/en/get-started/using-git/about-git", note: "short" },
        { name: "Oh My Git!", url: "https://ohmygit.org/", note: "a game, surprisingly useful" }
      ]
    }
  ]
};
