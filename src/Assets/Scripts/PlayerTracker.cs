using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerTracker : MonoBehaviour
{
    private GameObject player;
    private Transform playerTransform;

    void Start()
    {
        player = GameObject.FindGameObjectWithTag("Player");
        playerTransform = this.transform;
    }

    void Update()
    {
        Vector3 playerPosition = playerTransform.position;
        Vector3 enemyPosition = player.transform.position;
        Vector3 relativeEnemyPosition = enemyPosition - playerPosition;
    }
}
