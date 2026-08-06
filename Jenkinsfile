pipeline {

    agent any

    environment {

        DOCKER_USERNAME = "gani4152"

        BACKEND_IMAGE = "gani4152/thulasi-chats-backend"

        FRONTEND_IMAGE = "gani4152/thulasi-chats-frontend"

        IMAGE_TAG = "latest"

    }

    stages {

        stage('Checkout Source') {

            steps {

                checkout scm

            }

        }

        stage('Verify Tools') {

            steps {

                sh 'java -version'
                sh './backend/mvnw -version'
                sh 'docker --version'
                sh 'docker compose version'

            }

        }

        stage('Build Backend') {

            steps {

                dir('backend') {

                    sh './mvnw clean package -DskipTests'

                }

            }

        }

        stage('Build Docker Images') {

            steps {

                sh 'docker compose build'

            }

        }

        stage('Docker Hub Login') {

            steps {

                withCredentials([usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''

                }

            }

        }

        stage('Tag Images') {

            steps {

                sh '''
                docker tag thulasi-chats-backend:1.0 $BACKEND_IMAGE:$IMAGE_TAG
                docker tag thulasi-chats-frontend:1.0 $FRONTEND_IMAGE:$IMAGE_TAG
                '''

            }

        }

        stage('Push Images') {

            steps {

                sh '''
                docker push $BACKEND_IMAGE:$IMAGE_TAG
                docker push $FRONTEND_IMAGE:$IMAGE_TAG
                '''

            }

        }

        stage('Deploy') {

            steps {

                sh '''
                docker compose down
                docker compose up -d
                '''

            }

        }

    }

    post {

        success {

            echo "====================================="
            echo "Deployment Successful"
            echo "====================================="

        }

        failure {

            echo "====================================="
            echo "Pipeline Failed"
            echo "====================================="

        }

        always {

            sh 'docker image prune -f'

        }

    }

}
