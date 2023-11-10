const cardContainer = document.querySelector(".card-container");

function createCards() {
  cardContainer.innerHTML += `
                                <div>
                                    <h3>Cross-course project</h3>
                                        <div class="card-box">
                                            <img src="images/GameHub.JPG" class="project-image modal-images" alt="image of the frontpage from my cross course project">
                                            <ul class="link-decoration">
                                                <li><b>Description:</b> Selling and buying used games</li>
                                                <li><b>Repo:</b> <a href="https://github.com/KIVERSEN86/GameHub-v2.git">Github Repo</a></li>
                                                <li><b>Live site:</b> <a href="https://silly-euler-586de3.netlify.app/">Game Hub</a></li>
                                            </ul>
                                            <div class="button-container">
                                                <a href="cardspecific.html" class="cta">View more</a>
                                            </div>
                                        </div>
                                </div>`;
}
createCards();
