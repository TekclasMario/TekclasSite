<template>
  <v-container class="projects page">
    <v-card>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-img src="/color3.png" height="125px"></v-img>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card color="cyan darken-2" class="white--text">
            <v-layout>
              <v-flex sm5>
                <v-img src="/cyan2.jpg" height="125px" contain></v-img>
              </v-flex>
              <v-flex xs12 sm7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Material Design</div>
                    <div>Capture the Imagination</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex id="e1" class="purple lighten-1" xs12 sm4>
          <v-card-title>
            <h3 class="white--text">My goal is to create the best Web pressence money can buy</h3>
          </v-card-title>
        </v-flex>
        <v-flex class="purple white--text" pa-3 xs12 sm4>
          <v-card-text>
            I established my foundation in design as an undergraduate student at the New York
            Institute of Technology, School of Design and Architecture. It is there that I was introduced to,
            learned about and began understanding the beauty and intricacies of design and how to develop a
            sharp eye on aesthetics. Moving into the world of Web Design and Development has allowed me to translate
            that and other incredible experiences into beautiful web designs.
          </v-card-text>
        </v-flex>
        <v-flex xs12 sm4 class="purple darken-1">
          <v-responsive>
            <v-img src="/purp.jpg" id="e2" contain></v-img>
          </v-responsive>
        </v-flex>
        <v-flex xs12 sm6 black>
          <v-img src="/color2.png" height="300px"></v-img>
        </v-flex>
        <v-flex xs12 sm6 black>
          <v-card color="green white--text">
            <v-card-text id="e3">
              My goal in joining your team is to fuse my passion for design with the dedication and unequivocal
              pursuit of quality that is a standard of your organization.
              I bring a unique view on design, along with a strong commitment
              for customer satisfaction,
              that will please your customers and elate your team members.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<style scoped>
#e1 {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
}

#e2 {
  height: 15rem;
}

#e3 {
  margin-top: 2.5rem;
  padding: 3.5rem;
  text-align: center;
  height: 100%;
}

/* Media Queries */

@media screen and (max-width: 768px) {
  #e1 {
    padding: 1rem;
    justify-content: center;
  }

  #e2 {
    height: 20rem;
  }
}
@media screen and (max-width: 600px) {
  #e1 {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    text-align: center;
  }

  #e2 {
    height: 15rem;
  }

  #e3 {
    margin-top: 2.5rem;
    padding: 3.5rem;
    text-align: center;
    height: 100%;
  }
}
@media screen and (max-width: 480px) {
  #e1 {
    padding: 2rem;
  }

  #e1 {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    text-align: center;
  }

  #e2 {
    height: 15rem;
  }

  #e3 {
    margin-top: 2.5rem;
    padding: 3.5rem;
    text-align: center;
    height: 100%;
  }
}
</style>
  

  
  
  
  
  
 