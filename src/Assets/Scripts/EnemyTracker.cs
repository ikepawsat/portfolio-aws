using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class EnemyTracker : MonoBehaviour
{
    private GameObject player;
    private Transform playerTransform;
    private Movement movement;
    private NN neuralNetwork;

    public double reward; //public for the reset C# so I can subtract points.
    public double pastReward; //assign wherever reset reward

    void Start()
    {
        player = GameObject.FindGameObjectWithTag("Player");
        playerTransform = player.transform;
        movement = GetComponent<Movement>();
        neuralNetwork = GetComponent<NN>();
        Application.targetFrameRate = 60;
    }

    public void Update()
    {
        Vector3 playerPosition = playerTransform.position;
        Vector3 enemyPosition = transform.position;
        Vector3 relativePlayerPosition = playerPosition - enemyPosition;

        float[] inputs = { relativePlayerPosition.x, relativePlayerPosition.y, relativePlayerPosition.z };
        float[] output = neuralNetwork.Brain(inputs);

        MakeDecision(output);
        Reward(0);
    }

    public void Reward(double change)
    {
        Vector3 playerPosition = playerTransform.position;
        Vector3 enemyPosition = transform.position;
        Vector3 relativePlayerPosition = playerPosition - enemyPosition;
        
        double distance = Math.Pow(Math.Pow(relativePlayerPosition.x, 2) + Math.Pow(relativePlayerPosition.y, 2) + Math.Pow(relativePlayerPosition.z, 2), 1/2);
    
        reward += distance / 60; //scales reward to length of program by dividing by frame rate
        reward += change;

        //maybe put this stuff below in reset area?
        if (reward > pastReward)
        {
            reward = reward + 1; //temp holder
            //copy current NN to new gen
        }
        else
        {
            reward = reward + 1; //temp holder
            //mutate NN to new gen
        }

    }

    void MakeDecision(float[] output)
    {
        float forwardOutput = output[0];
        float backOutput = output[1];
        float leftOutput = output[2];
        float rightOutput = output[3];
        float jumpOutput = output[4];

        // Determine the action with the highest output value
        float highestOutput = Mathf.Max(forwardOutput, backOutput, leftOutput, rightOutput, jumpOutput);

        if (highestOutput == forwardOutput)
        {
            // Move toward the player using PlayerMovement script
            movement.Move(1, 0); // Move forward
        }
        else if (highestOutput == backOutput)
        {
            // Move toward the player using PlayerMovement script
            movement.Move(-1, 0); // Move left
        }
        else if (highestOutput == leftOutput)
        {
            // Move toward the player using PlayerMovement script
            movement.Move(0, -1); // Move left
        }
        else if (highestOutput == rightOutput)
        {
            // Move toward the player using PlayerMovement script
            movement.Move(0, 1); // Move right
        }
        if (highestOutput == jumpOutput)
        {
            // Jump using PlayerMovement script
            movement.Jump(); // Call the Jump method in PlayerMovement
        }
    }
}
