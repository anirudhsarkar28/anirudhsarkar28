async function load(id, file) {
    const response = await fetch(file);
    document.getElementById(id).innerHTML =
        await response.text();
}

load("navbar", "components/navbar.html");
load("about", "components/about.html");
load("skills", "components/skills.html");
load("projects", "components/projects.html");
load("experience", "components/experience.html");
load("education", "components/education.html");
load("contact", "components/contact.html");
load("footer", "components/footer.html");