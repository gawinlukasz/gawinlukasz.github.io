const $ = (sel) => document.querySelector(sel);

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function render() {
  document.title = `${SITE.name} — ${SITE.role}`;
  $("#brand").textContent = SITE.name;
  $("#hero-name").textContent = SITE.name;
  $("#hero-role").textContent = `${SITE.role} · ${SITE.location}`;
  $("#hero-lead").textContent = SITE.heroLead;
  $("#avail").textContent = SITE.availability;

  const mail = $("#mail");
  if (mail) mail.href = `mailto:${SITE.email}`;
  const li = $("#li");
  if (li) li.href = SITE.linkedin;

  $("#facts").innerHTML = SITE.facts
    .map((f) => `<div class="fact"><b>${esc(f.k)}</b><span>${esc(f.v)}</span></div>`)
    .join("");

  $("#about").innerHTML = SITE.about.map((p) => `<p>${esc(p)}</p>`).join("");

  $("#experience").innerHTML = SITE.experience
    .map(
      (job) => `
      <article class="job">
        <div>
          <time>${esc(job.years)}</time>
          <div class="org">${esc(job.place)}</div>
        </div>
        <div>
          <h3>${esc(job.title)}</h3>
          <div class="org">${esc(job.org)}</div>
          <ul>${job.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
      </article>`
    )
    .join("");

  $("#stack").innerHTML = SITE.stack
    .map(
      (t) => `
      <article class="tool">
        <strong>${esc(t.name)}</strong>
        <span class="tag ${esc(t.level)}">${esc(t.level)}</span>
        <p>${esc(t.note)}</p>
      </article>`
    )
    .join("");

  $("#skills").innerHTML = SITE.skills.map((s) => `<li>${esc(s)}</li>`).join("");
  $("#certs").innerHTML = SITE.certs.map((c) => `<li>${esc(c)}</li>`).join("");

  $("#outside-text").textContent = SITE.outside.text;
  $("#photos").innerHTML = SITE.outside.photos
    .map((p) => {
      const has = p.file && p.file.trim();
      return `
        <figure class="shot ${has ? "has-img" : ""}">
          ${has ? `<img src="images/${esc(p.file)}" alt="${esc(p.caption)}">` : ""}
          <span>${esc(p.caption)}${has ? "" : " · add a photo"}</span>
        </figure>`;
    })
    .join("");

  $("#learn-intro").textContent = SITE.learnIntro;
  $("#learn").innerHTML = SITE.learn
    .map(
      (block) => `
      <article class="card">
        <h3>${esc(block.topic)}</h3>
        <p class="why">${esc(block.why)}</p>
        <ul>
          ${block.links
            .map(
              (l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.name)}</a><small>${esc(l.note)}</small></li>`
            )
            .join("")}
        </ul>
      </article>`
    )
    .join("");

  $("#foot-name").textContent = SITE.name;
  const footMail = $("#foot-mail");
  footMail.href = `mailto:${SITE.email}`;
  footMail.textContent = SITE.email.includes("twoj@") ? "email" : SITE.email;
}

render();
