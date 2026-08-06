pipeline {

    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {

        PROJECT_NAME = "Thulasi-Bangarpet-Chats"

        COMPOSE_FILE = "docker-compose.yml"

        BACKEND_DIR = "backend"

    }

    stages {

        stage('Checkout Source') {

            steps {

                echo "========== Checking out source code =========="

                checkout scm

            }

        }

        stage('Verify Environment') {

            steps {

                sh 'java -version'
                sh 'docker --version'
                sh 'docker compose version'

            }

        }

        stage('Build Spring Boot') {

            steps {

                dir("${BACKEND_DIR}") {

                    sh 'chmod +x mvnw'
                    sh './mvnw clean package -DskipTests'

                }

            }

        }

        stage('Build Docker Images') {

            steps {

                sh "docker compose -f ${COMPOSE_FILE} build --no-cache"

            }

        }

        stage('Deploy Application') {

            steps {

                sh "docker compose -f ${COMPOSE_FILE} down || true"

                sh "docker compose -f ${COMPOSE_FILE} up -d"

            }

        }

        stage('Verify Deployment') {

            steps {

                sh 'docker ps'

                sh 'docker compose ps'

            }

        }

        stage('Docker Cleanup') {

            steps {

                sh 'docker image prune -f'

            }

        }

    }

    post {

        success {

            echo "=============================================="
            echo "Deployment Successful"
            echo "Frontend : http://13.207.126.116:3000"
            echo "Backend  : http://13.207.126.116:8081"
            echo "=============================================="

        }

        failure {

            echo "=============================================="
            echo "Deployment Failed"
            echo "Check Jenkins Console Output"
            echo "=============================================="

        }

        always {

            sh 'docker compose ps || true'

        }

    }

}
