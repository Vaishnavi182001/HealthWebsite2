import React from "react"
import Image from "../components/Images/Images"
import Layout from "../components/Layout/Layout"

const Women = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2  text-center"> Women's Heatlh</h2>
        <h3 className="pb-2  text-center">
          Trusted comprehensive health information and resources for women
        </h3>
      </div>

      <div className="container py-5">
        <h3 className="pb-2 border-bottom text-center">Fitness Challenges</h3>

        <div className="row">
          <div className="col-lg-4">
            <div class="card text-white bg-info mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title">30-Days Fitness Challenges</h4>
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "10px",
                    }}
                    filename="workout1.jpg"
                    alt="1"
                  />
                </div>
                <p class="card-text">
                  Sticking to a fitness routine is all about finding a workout
                  you love, whether that's running, yoga, strength training, or
                  walking.
                </p>
                <p>
                  Do one exercise each day, except on your mindfulness rest day.
                  For each exercise, you'll work for 30 seconds (per side, if
                  applicable), then take a 30 second rest. Continue for five
                  rounds, or five to 7.5 minutes total.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card bg-light mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title">Healthy Diet</h4>
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "10px",
                    }}
                    filename="healthy diet.jpg"
                    alt="1"
                  />
                </div>
                <p class="card-text">A healthy eating plan:</p>
                <p>
                  {" "}
                  1.Emphasizes vegetables, fruits, whole grains, and fat-free or
                  low-fat dairy products.
                </p>
                <p>
                  2.Includes lean meats, poultry, fish, beans, eggs, and nuts.
                </p>
                <p>
                  {" "}
                  3.Limits saturated and trans fats, sodium, and added sugars.
                </p>{" "}
                <p>4.Controls portion sizes.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card text-white bg-dark mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title">Meditation</h4>
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "10px",
                    }}
                    filename="meditation.jpg"
                    alt="1"
                  />
                </div>
                <p class="card-text">
                  The Five Stages of Meditation Practice from Beginners to
                  Advanced
                </p>
                <p>Stage 1: Balancing the gross body-mind.</p>
                <p>Stage 2: Balancing and activating the subtle body-mind.</p>
                <p>
                  Stage 3: Recognizing and resting in the formless-timeless
                  dimension of existence.{" "}
                </p>
                <p>
                  Stage 4: Developing ones inner-world communication skills.
                </p>
                <p>
                  Stage 5: Developing and integrating a non-dual experience of
                  stages 1-4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center"> Stomach Pains</h2>

        <div className="row">
          <div className="col-lg-4">
            <div class="card mb-3">
              <h3 class="card-header">Cramp but No Period ?</h3>
              <div class="card-body">
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "10px",
                    }}
                    filename="cramp.jpg"
                    alt="1"
                  />
                </div>
                {/* <h5 class="card-title">Special title treatment</h5>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6> */}
              </div>

              <div class="card-body">
                <p class="card-text">
                  Besides bloating, moodiness, and sudden sugar cravings, cramps
                  are one of the most common signs that your time of the month
                  is coming soon. While not very fun, they are at least reliable
                  indicators of when you need to have your pads, tampons, or
                  menstrual cups ready. Lots of women get pelvic pain and
                  cramping, but your period isn't always to blame. Cysts,
                  constipation, pregnancy -- even cancer -- can make it feel
                  like your monthly visitor is about to stop by. It can be tough
                  to tell whether having cramps without a period is caused by
                  something simple or more serious.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card mb-3">
              <h3 class="card-header">To Get Rid of Period Bloating</h3>
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6> */}
              </div>
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "10px",
                  }}
                  filename="bloating.jpg"
                  alt="1"
                />
              </div>
              <div class="card-body">
                <p class="card-text">
                  1. Pick protein- and potassium-rich foods.
                </p>
                <p>2. Stay away from foods that cause gas.</p>
                <p>3. Don't skip your workout routine.</p>
                <p>4. Cut back on caffeine and alcohol (just for now).</p>
                <p>5. Score a little more shut-eye.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card mb-3">
              <h3 class="card-header">Diarrhea on your Periods</h3>
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6> */}
              </div>
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "10px",
                  }}
                  filename="diarrhea.jpg"
                  alt="1"
                />
              </div>
              <div class="card-body">
                <p class="card-text">
                  If you’ve been having GI symptoms like cramping, bloating,
                  gas, diarrhea, and constipation that get worse during your
                  period, you could have a gastrointestinal condition like
                  irritable bowel syndrome (IBS) or inflammatory bowel disease
                  (IBD), so you’ll want to ask about visiting a specialist. If
                  your period triggers bloody diarrhea or abdominal pain so bad
                  that you can't eat, you may have endometriosis, a condition
                  where the cells that line your uterus pop up elsewhere, and
                  you should definitely see an ob-gyn for a checkup.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h2 className="pb-2 border-bottom text-center"> Birth Control</h2>

          <div className="row">
            <div className="col-lg-4">
              <div class="card text-white bg-danger mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Symptoms when you quit the pill </h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "10px",
                      }}
                      filename="pill.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">1. You might get some pimples.</p>
                  <p>2. You might feel hornier.</p>
                  <p>3. Your period will change.</p>
                  <p>4. You might gain or lose weight.</p>
                  <p>5. You might get fewer headaches.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card bg-warning mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">
                    Does Birth Control Really Help Acne?
                  </h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "10px",
                      }}
                      filename="acne.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    “There are definite links between acne and hormones during
                    all phases of a woman’s life, from the teen years to
                    pregnancy and even perimenopause,”
                  </p>
                  <p>
                    Yes, According to Masterson, several studies show links
                    between certain kinds of birth control and a decrease in
                    acne—so much so that some birth control pills have actually
                    gone to the FDA to petition to be approved for use as an
                    acne treatment,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card text-white bg-info mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title"> You Need To Know About IUD </h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "10px",
                      }}
                      filename="iud.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    Birth control is pretty damn important to lots of women—and,
                    frankly, the easier it is to use, the better. Sure, the Pill
                    is fine and the ring gets the job done, but when you want
                    some real, pregnancy-prevention staying power, it's time to
                    bring out the big guns: IUDs
                  </p>
                  <p>
                    Intrauterine devices (IUDs) fall under the category of
                    long-acting reversible contraceptives. This means that they
                    prevent pregnancy for years but can be removed to restore
                    fertility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h3 className="pb-2 border-bottom text-center">Pregnancy</h3>

          <div className="row">
            <div className="col-lg-4">
              <div class="card text-white bg-primary mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Getting Pregnant</h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "10px",
                      }}
                      filename="pregnent.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    You're going to have a baby! it is important to:
                  </p>
                  <p>1. Have regular visits with your health care provider.</p>
                  <p>2. Eat healthy and drink plenty of water</p>
                  <p>3.Take prenatal vitamins</p>
                  <p>4.Be careful with medicines and stay active.</p>
                  <p>
                    5.Avoid substances that could hurt your baby, such as
                    alcohol, drugs, and tobacco.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card text-white bg-secondary mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Abortion Risk Factors</h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "10px",
                      }}
                      filename="abortion.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    There are always precipitating factors for every condition.
                    Here are the risk factors that concerns abortion:
                  </p>
                  <p>
                    1.Congenital Structural Defect. This structural defect may
                    be due to chromosomal aberration or a serious physical
                    defect.
                  </p>
                  <p>
                    2.Infection. In infection, the fetus would fail to grow and
                    estrogen and progesterone production would fall.
                  </p>
                  <p>
                    3.Drugs. There are drugs which are contraindicated for
                    pregnant women. Ingestion might compromise the fetus and
                    lead to abortion.
                  </p>
                  <p>
                    4. Undernutrition. Lack of nutrients would cause
                    undernourishment to both the mother and the fetus, leading
                    to abortion.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card text-white bg-success mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Miscarriage Prevention</h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "10px",
                      }}
                      filename="miscarriage.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    One step you can take is to get as healthy as you can before
                    you try to have a baby:
                  </p>
                  <p>1.Get regular exercise.</p>
                  <p>2.Get regular exercise.</p>
                  <p>3.Maintain a healthy weight.</p>
                  <p>4.Avoid infections.</p>
                  <p>5.Don’t smoke, drink alcohol, or take illegal drugs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h3 className="pb-2 border-bottom text-center">Mental Health</h3>
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "10px",
                  }}
                  filename="mental health.jpg"
                  alt="1"
                />
              </div>
              Breathing exercises can help with lowering your overall stress and
              anxiety levels and preventing them from spiking. The key is to
              practice them regularly, not just when you're experiencing an
              anxious moment If your temp rises when you get anxious, you might
              want to consider a breathing technique that can bring it back
              down. Straw breathing is one of those practices brings about a
              cooling sensation through the mouth. If you’re in need of some
              serious tension relief, try the cocoon breath . This technique
              gives people a sense of “privacy, boundaries, and deep
              exhalation,” so it’s great for when you’re feeling that you need a
              moment to yourself to regroup.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Women
