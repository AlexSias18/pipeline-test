pipeline{
    agent any
    tools{
        nodejs 'nodejs'

    }
    parameters{
        choice(name: 'ENV', choices: ['dev','uat'], description: 'Seleccionar ambiente')
        string(name: 'TAG', trim:false, description: 'Tag a ejecutar')
    }
    stages{
        stage('Build'){
            steps{
                script{
                    if(isUnix()){
                        sh "npm install"
                        sh "npx playwright install"
                    }else{
                        bat "npm install"
                        bat "npx playwright install"
                    }
                }
            }
        }
        stage('Execute Test'){
            steps{
                script{
                    try{
                        if(isUnix()){
                            echo "Executing tag: ${params.TAG} "
                            sh "npm run test-${ENV} --tags=${TAG}"
                        }else{
                            echo "Executing tag: ${params.TAG}"
                            bat "npm run test-${ENV} --tags=${TAG}"
                        }
                    }finally{
                        publishReport();
                    }
                    
                }
            }
        }
    }
}

    def publishReport(){
        publishHTML(target:[
            reportName:'Cucumber Report',
            reportDir:  'C:/Users/Usuario/Documents/pipeline/playwright-training-scotia 2/playwright-training-scotia/test-results/reports/',
            reportFiles:'index.html',
            keepAll:true,
            alwaysLinkToLastBuild:false,
            allowMissing:true
        ])

    }