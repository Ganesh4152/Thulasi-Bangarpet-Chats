pipeline {

    agent any

    environment {

        BACKEND_DIR = "backend"
        FRONTEND_DIR = "frontend"

    }

    stages {

        stage('Checkout Source') {

            steps {

                checkout scm

            }

        }

        stage('Show Workspace') {

            steps {

                sh 'pwd'
                sh 'ls -la'

            }

        }

        stage('Backend Build') {

            steps {

                dir("${BACKEND_DIR}") {

                    sh './mvnw clean package -DskipTests'

                }

            }

        }

        stage('Frontend Install') {

            steps {

                dir("${FRONTEND_DIR}") {

                    sh 'npm install'

                }

            }

        }

        stage('Frontend Build') {

            steps {

                dir("${FRONTEND_DIR}") {

                    sh 'npm run build'

                }

            }

        }

    }

    post {

        success {

            echo '====================================='
            echo 'BUILD COMPLETED SUCCESSFULLY'
            echo '====================================='

        }

        failure {

            echo '====================================='
            echo 'BUILD FAILED'
            echo '====================================='

        }

        always {

            cleanWs()

        }

    }

}
