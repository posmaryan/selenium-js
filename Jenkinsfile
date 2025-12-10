pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // nama NodeJS dari Jenkins configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/username/selenium-js.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                sh 'node test.js'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}

