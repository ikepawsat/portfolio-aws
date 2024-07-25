using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Reset : MonoBehaviour
{
    private Vector3 playerTeleportDestination;
    private Vector3 enemyTeleportDestination;
    private EnemyTracker et;
    private float timer = 5f;

    void Start()
    {
        et = FindObjectOfType<EnemyTracker>();
        playerTeleportDestination = new Vector3(-4f, 1f, -6f);
        enemyTeleportDestination = new Vector3(10f, 0.5f, 12f);
    }

    void Update()
    {
        timer -= Time.deltaTime;
        if (timer <= 0.0f)
        {
            Debug.Log("Timer reset");
            et.Reward(1);
            resetScene();
        }
    }

    void OnTriggerEnter(Collider col)
    {
        Debug.Log("OnTriggerEnter called");
        if (col.CompareTag("Player"))
        {
            Debug.Log("Player collided with trigger");
            et.Reward(timer * -1);
            resetScene();
        }
    }

    private void resetScene()
    {
        TeleportObjects(playerTeleportDestination, enemyTeleportDestination);
        timer = 5f;
        pastReward = reward;
        reward = 0;
    }

    void TeleportObjects(Vector3 destinationPlayer, Vector3 destinationEnemy)
    {
        GameObject player = GameObject.FindGameObjectWithTag("Player");
        player.transform.position = destinationPlayer;
        GameObject enemy = GameObject.FindGameObjectWithTag("Enemy");
        enemy.transform.position = destinationEnemy;
    }
}
